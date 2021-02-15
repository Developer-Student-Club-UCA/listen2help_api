const mongoose = require('mongoose');
const deviceSchema = require('./device.schema');
const roomSchema = require('./room.schema');

const serverRootSchema = new mongoose.Schema({
    devices: [{
        type: deviceSchema,
        required: true
    }],
    devicesSize: {
        type: Number,
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

module.exports = mongoose.model('server-root', serverRootSchema);
