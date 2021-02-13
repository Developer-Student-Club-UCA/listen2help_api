const mongoose = require('mongoose');
const rsaKeyCertificateSchema = require('./rsaKeyCertificate.schema');

const deviceSchema = new mongoose.Schema({
    keyAndCertificate: {
        type: rsaKeyCertificateSchema,
        required: false
    },
    devFamily: {
        type: String,
        required: true
    },
    notificationToken: {
        type: String,
        required: false
    },
    invitation: {
        pend: {
            token: {
                type: String,
                required: true
            },
            expirationDate: {
                type: String,
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
                type: String,
                required: false
            }
        }
    }
});

module.exports = deviceSchema;
