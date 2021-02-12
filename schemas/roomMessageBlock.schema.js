const mongoose = require('mongoose');
const roomMessage = require('./roomMessage.schema');

const roomMessageBlockSchema = new mongoose.Schema({
    first: {
        date: {
            type: String,
            required: true
        }
    },
    last: {
        date: {
            type: String,
            required: true
        }
    },
    messages: [{
        type: roomMessage,
        required: true
    }]
});

module.exports = roomMessageBlockSchema;
