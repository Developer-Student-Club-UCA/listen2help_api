const mongoose = require('mongoose');
const userProfileAnonimHeadSchema = require('./userProfileAnonimHead.schema');
const cypherDataKeySchema = require('./cypherDataKey.schema');
const cypherDataSchema = require('./cypherData.schema');

const userProfileAnonimSchema = new mongoose.Schema({
    head: {
        type: userProfileAnonimHeadSchema,
        required: true
    },
    dossierKey: {
        type: cypherDataKeySchema,
        required: false
    },
    dossierData: {
        type: cypherDataSchema,
        required: false
    }
});

module.exports = userProfileAnonimSchema;
