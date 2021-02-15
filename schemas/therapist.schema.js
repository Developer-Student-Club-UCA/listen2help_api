const mongoose = require('mongoose');
const therapistHeadSchema = require('./therapistHead.schema');
const cypherDataSchema = require('./cypherData.schema');
const cypherDataKeySchema = require('./cypherDataKey.schema.schema');

const therapistSchema = new mongoose.Schema({
    head: {
        type: therapistHeadSchema,
        required: true
    },
    emailKey: {
        type: cypherDataKeySchema,
        required: true
    },
    emailEncrypted: {
        type: cypherDataSchema,
        required: true
    }
});

module.exports = mongoose.model('therapist', therapistSchema);
