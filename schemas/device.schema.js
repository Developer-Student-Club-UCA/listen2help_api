const mongoose = require('mongoose');
const rsaKeyCertificateSchema = require('./rsaKeyCertificate.schema');

const deviceSchema = new mongoose.Schema({
    keyAndCertificate: {
        type: rsaKeyCertificateSchema,
        required: true
    },
    devFamily: {
        type: String,
        required: true
    },
    notificationToken: {
        type: String,
        required: true
    },
    invitation: {
        pend: {
            token: {
                type: String,
                required: true
            },
            expirationDate: {
                type: Date,
                required: true
            },
            failCount: {
                type: Number,
                required: true,
                default: 0
            }
        },
        auth: {
            deviceId: {
                type: String,
                required: false
            },
            date: {
                type: Date,
                required: false
            }
        }
    }
});

module.exports = deviceSchema;
