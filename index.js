const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser  = require("body-parser");
const dotenv = require('dotenv');
const crypto = require('crypto');
let cors = require('cors');
let endpoints = require("./endpoints");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dotenv.config();

//Connect to db, uncomment this when you got the .env file
/*mongoose.connect(
    process.env.DB_CONNECT, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => console.log('Connected to DB'));*/

//Cors
app.use(cors({ origin: true }));

app.listen(
    process.env.PORT || 8080,
    () => console.log(`Node server running on http://localhost:${process.env.PORT}`));

endpoints(app);
