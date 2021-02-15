const mongoose = require('mongoose');
const userProfileAnonim = require('./userProfileAnonim.schema');

const roomMessageBlockSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    accepted: {
        type: Boolean,
        required: true
    },
    user: {
        type: userProfileAnonim,
        required: true
    }
});

module.exports = roomMessageBlockSchema;
