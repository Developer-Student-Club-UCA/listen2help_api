const mongoose = require('mongoose');
const userProfileAnonimHeadSchema = require('./userProfileAnonimHead.schema');

const userProfileAnonimSchema = new mongoose.Schema({
    head: {
        type: userProfileAnonimHeadSchema,
        required: true
    },
    dossierKey: {
        type: String,
        required: true
    },
    dossierData: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user-profile-anonim', userProfileAnonimSchema);
