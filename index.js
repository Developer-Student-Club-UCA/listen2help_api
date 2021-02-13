const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origins: ['http://localhost:4200']
    }
});

const mongoose = require('mongoose');
const bodyParser  = require("body-parser");
const dotenv = require('dotenv');
const crypto = require('crypto');
const constants = require('./shared/constantsMessages.shared');

const auth = require('./controllers/authentication.controller');

let cors = require('cors');
let endpoints = require("./endpoints");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dotenv.config();

//Connect to db
mongoose.connect(
    process.env.DB_CONNECT, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    (err) => {
        if (err) {
            console.log(err);
        }
        console.log(constants.SuccessConnectionToDB);
    });

//Cors
app.use(cors({ origin: true }));

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('join-device', (deviceId) => {
        socket.join(deviceId.deviceId);
    });

    auth(app, socket);
});

endpoints(app);

http.listen(process.env.PORT, () => {
    console.log(`${constants.ServerSuccessStatus} on *:${process.env.PORT}`);
});
