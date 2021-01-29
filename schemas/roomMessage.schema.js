const mongoose = require('mongoose');

const roomMessageSchema = new mongoose.Schema({
    senderId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

module.exports = roomMessageSchema;
