const mongoose = require('mongoose');

const rsaKeyCertificateSchema = new mongoose.Schema({
    serial: {
        type: String,
        required: true
    },
    certificate: {
        type: String,
        required: true
    },
    certificateSize: {
        type: Number,
        required: false
    },
    message: {
        type: String,
        required: true
    },
    p12: {
        type: String,
        required: false
    },
    p12Size: {
        type: Number,
        required: false
    }
});

module.exports = rsaKeyCertificateSchema;
