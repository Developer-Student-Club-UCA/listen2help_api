const mongoose = require('mongoose');
const therapistHeadSchema = require('./therapistHead.schema');

const therapistSchema = new mongoose.Schema({
    head: {
        type: therapistHeadSchema,
        required: true
    },
    emailKey: {
        type: String,
        required: true
    },
    emailEncrypted: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('therapist', therapistSchema);
