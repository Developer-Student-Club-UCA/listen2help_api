const mongoose = require('mongoose');
const roomMessageBlockSchema = require('./roomMessageBlock.schema');
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
    roomMembers: [{
        type: roomMemberSchema,
        required: true
    }],
    messages: [{
        messageBlockId: {
            type: String,
            required: false
        },
        date: {
            type: Date,
            required: false
        }
    }]
});

module.exports = roomSchema;
