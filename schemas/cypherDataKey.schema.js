const mongoose = require('mongoose');

const cypherDataKeySchema = new mongoose.Schema({
    key: {
        type: String,
        required: true
    },
    keySize: {
        type: Number,
        required: false
    },
    salt: {
        type: String,
        required: true
    },
    saltSize: {
        type: Number,
        required: false
    },
    iterations: {
        type: Number,
        required: false
    }
});

module.exports = cypherDataKeySchema;
