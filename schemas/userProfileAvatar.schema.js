const mongoose = require('mongoose');

const userProfileAvatarSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: true
    }
});

module.exports = userProfileAvatarSchema;
