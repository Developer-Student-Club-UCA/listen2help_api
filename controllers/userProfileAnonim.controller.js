'use strict';
const mongoose = require('mongoose');
const UserProfileAnonim = require('../schemas/userProfileAnonim.schema');
const UserProfileAnonimSchema = mongoose.model('user-profile-anonim', UserProfileAnonim);
const constants = require('../shared/constantsMessages.shared');

module.exports = {
    GetUserProfileAnonim: async function (req, res) {
        try {
            UserProfileAnonimSchema.find({}, function(err, userProfileAnonimSchema) {
                if (err) {
                    return res.status(404).json({
                        success: false,
                        msg: constants.GetPetitionsErrorMessage,
                        data: {}
                    });
                }
                return res.status(200).json({
                    success: true,
                    msg: constants.GetPetitionsSuccessMessage,
                    data: userProfileAnonimSchema
                });
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                msg: constants.ServerErrorMessage,
                data: error
            });
        }
    },
    GetUserProfileAnonimById: async function (req, res) {
        try {
            UserProfileAnonimSchema.findById(req.params.userProfileAnonimId)
                .then(userProfileAnonim => {
                    if (!userProfileAnonim) {
                        return res.status(404).json({
                            success: false,
                            msg: constants.GetByIdPetitionsErrorMessage,
                            data: {}
                        });
                    }
                    return res.status(200).json({
                        success: true,
                        msg: constants.GetByIdPetitionsSuccessMessage,
                        data: userProfileAnonim
                    });
                });
        } catch (error) {
            return res.status(500).json({
                success: false,
                msg: 'ERROR',
                data: error
            });
        }
    },
    PostUserProfileAnonim: async function (req, res) {
        try {
            const { head, dossierKey, dossierData } = req.body;
            const userProfileAnonim = new UserProfileAnonimSchema({
                head: head,
                dossierKey: dossierKey,
                dossierData: dossierData
            });
            try {
                const savedUserProfileAnonim = await userProfileAnonim.save();
                return res.status(200).json({
                    success: true,
                    msg: constants.PostPetitionsSuccessMessage,
                    data: savedUserProfileAnonim
                });
            } catch (error) {
                return res.status(400).json({
                    success: false,
                    msg: constants.PostPetitionsErrorMessage,
                    data: error
                });
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                msg: constants.ServerErrorMessage,
                data: error
            });
        }
    },
    PutUserProfileAnonimById: async function (req, res) {
        try {
            const userProfileAnonimId = { _id: req.params.userProfileAnonimId };

            UserProfileAnonimSchema.findById(userProfileAnonimId)
                .then(userProfileAnonim => {
                    if (!userProfileAnonim) {
                        return res.status(404).json({
                            success: false,
                            msg: constants.GetByIdPetitionsErrorMessage,
                            data: {}
                        });
                    } else {
                        UserProfileAnonimSchema.updateOne(userProfileAnonimId, req.body)
                            .then(updateResponse => {
                                if (!updateResponse) {
                                    return res.status(400).json({
                                        success: false,
                                        msg: constants.PutPetitionsErrorMessage,
                                        data: updateResponse
                                    });
                                } else {
                                    return res.status(201).json({
                                        success: true,
                                        msg: constants.PutPetitionsSuccessMessage,
                                        data: updateResponse
                                    });
                                }
                            });
                    }
                });
        } catch (error) {
            return res.status(500).json({
                success: false,
                msg: constants.ServerErrorMessage,
                data: error
            });
        }
    },
    DeleteUserProfileAnonimById: async function (req, res) {
        try {
            const userProfileAnonimId = { _id: req.params.userProfileAnonimId };

            UserProfileAnonimSchema.findById(userProfileAnonimId)
                .then(userProfileAnonim => {
                    if (!userProfileAnonim) {
                        return res.status(404).json({
                            success: false,
                            msg: constants.GetByIdPetitionsErrorMessage,
                            data: {}
                        });
                    } else {
                        UserProfileAnonimSchema.deleteOne(userProfileAnonimId, req.body)
                            .exec()
                            .then(deleteResponse => {
                                if (!deleteResponse) {
                                    return res.status(400).json({
                                        success: false,
                                        msg: constants.DeletePetitionsErrorMessage,
                                        data: deleteResponse
                                    });
                                } else {
                                    return res.status(200).json({
                                        success: true,
                                        msg: constants.DeletePetitionsSuccessMessage,
                                        data: deleteResponse
                                    });
                                }
                            });
                    }
                });
        } catch (error) {
            return res.status(500).json({
                success: false,
                msg: constants.ServerErrorMessage,
                data: error
            });
        }
    }
};
