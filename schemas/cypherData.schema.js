const mongoose = require('mongoose');

const cypherDataSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    dataSize: {
        type: Number,
        required: false
    }
});

module.exports = cypherDataSchema;
