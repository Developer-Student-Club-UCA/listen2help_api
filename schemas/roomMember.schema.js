const mongoose = require('mongoose');
const userProfileAnonim = require('./userProfileAnonim.schema');
const rsaKeyCertificateSchema = require('./rsaKeyCertificate.schema');
const cypherDataKeySchema = require('./cypherDataKey.schema');
const cypherDataSchema = require('./cypherData.schema.schema');

const roomMemberSchema = new mongoose.Schema({
    deviceId: {
        type: String,
        required: true
    },
    joinDate: {
        type: Date,
        required: true
    },
    anonimProfile: {
        type: userProfileAnonim,
        required: false
    },
    deviceCertificate: {
        type: rsaKeyCertificateSchema,
        required: true
    },
    encryptedKey: {
        type: cypherDataKeySchema,
        required: true
    },
    maxSequenceIdSent: [{
        messageId: {
            type: String,
            required: false
        }
    }],
    maxSequenceIdSeen: [{
        messageId: {
            type: String,
            required: false
        }
    }],
    dossierNewPage: {
        data: {
            type: cypherDataSchema,
            required: false
        }
    }

});

module.exports = roomMemberSchema;
