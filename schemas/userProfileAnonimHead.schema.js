const mongoose = require('mongoose');
const userProfileAvatar = require('./userProfileAvatar.schema');

const userProfileAnonimHeadSchema = new mongoose.Schema({
    alias: {
        type: String,
        required: true
    },
    avatar: {
        type: userProfileAvatar,
        required: true
    }
});

module.exports = userProfileAnonimHeadSchema;
