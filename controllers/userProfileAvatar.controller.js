'use strict';
const mongoose = require('mongoose');
const UserProfileAvatar = require('../schemas/userProfileAvatar.schema');
const UserProfileAvatarSchema = mongoose.model('user-profile-avatar', UserProfileAvatar);
const constants = require('../shared/constantsMessages.shared');

module.exports = {
    GetUserProfileAvatar: async function (req, res) {
        try {
            UserProfileAvatarSchema.find({}, function(err, userProfileAvatarSchema) {
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
                    data: userProfileAvatarSchema
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
    GetUserProfileAvatarById: async function (req, res) {
        try {
            UserProfileAvatarSchema.findById(req.params.userProfileAvatarId)
                .then(userProfileAvatar => {
                    if (!userProfileAvatar) {
                        return res.status(404).json({
                            success: false,
                            msg: constants.GetByIdPetitionsErrorMessage,
                            data: {}
                        });
                    }
                    return res.status(200).json({
                        success: true,
                        msg: constants.GetByIdPetitionsSuccessMessage,
                        data: userProfileAvatar
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
    PostUserProfileAvatar: async function (req, res) {
        try {
            const userProfileAvatar = new UserProfileAvatarSchema({
                photo: req.body.photo
            });
            try {
                const savedUserProfileAvatar = await userProfileAvatar.save();
                return res.status(200).json({
                    success: true,
                    msg: constants.PostPetitionsSuccessMessage,
                    data: savedUserProfileAvatar
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
    PutUserProfileAvatarById: async function (req, res) {
        try {
            const userProfileAvatarId = { _id: req.params.userProfileAvatarId };

            UserProfileAvatarSchema.findById(userProfileAvatarId)
                .then(userProfileAvatar => {
                    if (!userProfileAvatar) {
                        return res.status(404).json({
                            success: false,
                            msg: constants.GetByIdPetitionsErrorMessage,
                            data: {}
                        });
                    } else {
                        UserProfileAvatarSchema.updateOne(userProfileAvatarId, req.body)
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
    DeleteUserProfileAvatarById: async function (req, res) {
        try {
            const userProfileAvatarId = { _id: req.params.userProfileAvatarId };

            UserProfileAvatarSchema.findById(userProfileAvatarId)
                .then(userProfileAvatar => {
                    if (!userProfileAvatar) {
                        return res.status(404).json({
                            success: false,
                            msg: constants.GetByIdPetitionsErrorMessage,
                            data: {}
                        });
                    } else {
                        UserProfileAvatarSchema.deleteOne(userProfileAvatarId, req.body)
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
