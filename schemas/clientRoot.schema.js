const mongoose = require('mongoose');
const deviceSchema = require('./device.schema');
const roomSchema = require('./room.schema');
const userProfileAnonimSchema = require('./userProfileAnonim.schema');
const therapistSchema = require('./therapist.schema');

const clientRootSchema = new mongoose.Schema({
    device: {
        type: deviceSchema,
        required: true
    },
    profilesAnonims: [{
        type: userProfileAnonimSchema,
        required: false
    }],
    profilesAnonimsSize: {
        type: Number,
        required: false
    },
    therapistProfile: {
      type: therapistSchema,
      required: false
    },
    rooms: [{
        type: roomSchema,
        required: true
    }],
    roomsSize: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('client-root', clientRootSchema);
