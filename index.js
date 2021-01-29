const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser  = require("body-parser");
const dotenv = require('dotenv');
const crypto = require('crypto');
const constants = require('./shared/constantsMessages.shared');
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
    () => console.log(constants.SuccessConnectionToDB));

//Cors
app.use(cors({ origin: true }));

app.listen(
    process.env.PORT || 8080,
    () => console.log(`${constants.ServerSuccessStatus} on http://localhost:${process.env.PORT}`));

endpoints(app);
