let express = require("express");
let api = express.Router();

// Routes files goes here
require('./routes/authentication.route')(api);

module.exports = (app) => {
    app.use('/api', api);
};
