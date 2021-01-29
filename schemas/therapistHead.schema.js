const mongoose = require('mongoose');

const therapistHeadSchema = new mongoose.Schema({
    firstNames: {
        type: String,
        required: true
    },
    lastNames: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    photo: {
        type: String,
        required: true
    }
});

module.exports = therapistHeadSchema;
