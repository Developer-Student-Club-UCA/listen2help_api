'use strict';
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

module.exports = {
    Login: async function (req, res) {
        try {
            res.status(200).send({
                success: true,
                msg: 'trying the Login endpoint',
                data: {}
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                msg: 'ERROR',
                data: error
            });
        }
    }
};
