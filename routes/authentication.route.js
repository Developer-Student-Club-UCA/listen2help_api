'use strict';
let { Login } = require('../controllers/authentication.controller');

module.exports = (api) => {
    api.post('/login', Login);
};
