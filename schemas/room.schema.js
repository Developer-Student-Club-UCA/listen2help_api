const mongoose = require('mongoose');
const roomMessageSchema = require('./roomMessage.schema');
const roomMemberSchema = require('./roomMember.schema');

const roomSchema = new mongoose.Schema({
    creation: {
        date: {
            type: String,
            required: true
        },
        deviceId: {
            type: String,
            required: true
        }
    },
    lastActivity: {
        date: {
            type: String,
            required: true
        },
        deviceId: {
            type: String,
            required: true
        }
    },
    closed: {
        date: {
            type: String,
            required: true
        },
        deviceId: {
            type: String,
            required: true
        }
    },
    roomMembers: [roomMemberSchema],
    messages: [roomMessageSchema]
});

module.exports = roomSchema;
