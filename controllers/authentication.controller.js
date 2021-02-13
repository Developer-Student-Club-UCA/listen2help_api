'use strict';
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const mongoose = require('mongoose');
const Device = require('../schemas/device.schema');
const DeviceSchema = mongoose.model('device', Device);
const constants = require('../shared/constantsMessages.shared');

module.exports = (app, socket) => {
    // Generate token and save user device
    socket.on('authentication', (data) => {
        try {
            const token = jwt.sign({
                date: Date.now()
            }, process.env.TOKEN_SECRET, { expiresIn: '3d' });

            let dateInTimeStamp = new Date(Date.now());
            dateInTimeStamp.setDate(dateInTimeStamp.getDate() + 3);
            dateInTimeStamp = dateInTimeStamp/1000;

            const newUser = new DeviceSchema({
                keyAndCertificate: data.keyAndCertificate,
                devFamily: data.devFamily,
                notificationToken: data.notificationToken,
                invitation: {
                    pend: {
                        token: token,
                        expirationDate: dateInTimeStamp,
                        failCount: 0
                    },
                    auth: {
                        deviceId: '',
                        date: ''
                    }
                }
            });

            newUser.save((error) => {
                if (error) {
                    socket.emit('auth-token-generated', {
                        success: false,
                        msg: constants.SaveUserErrorMessage,
                        data: {}
                    });
                } else {
                    socket.emit('auth-token-generated', {
                        success: true,
                        msg: constants.TokenGeneratedMessage,
                        data: {
                            token: token,
                            expiresIn: constants.TokenExpirationTimeMessage
                        }
                    });
                }
            });
        } catch (error) {
            socket.emit('auth-token-generated', {
                success: false,
                msg: constants.SocketErrorMessage,
                data: error
            });
        }
    });

    // Verify the token
    socket.on('verify-token', (token) => {
        let tokenToVerify = token.token;

        if (!tokenToVerify) {
            socket.emit('grant-access', {
                success: false,
                msg: constants.AccessDeniedMessage,
                data: constants.NoTokenReceivedMessage
            });
        }

        try {
            jwt.verify(tokenToVerify, process.env.TOKEN_SECRET, (err) => {
                if (err) {
                    socket.emit('grant-access', {
                        success: false,
                        msg: constants.AccessDeniedMessage,
                        data: constants.InvalidTokenMessage
                    });
                } else {
                    DeviceSchema.findOne({
                        "invitation.pend.token": token.token
                    }).then( res => {
                        if ( res === [] || res === null || res === undefined || res === '' ) {
                            socket.emit('grant-access', {
                                success: false,
                                msg: constants.AccessDeniedMessage,
                                data: constants.NoUserFoundMessage
                            });
                        } else {
                            const currentDate = new Date();
                            const expirationDate = new Date(res.invitation.pend.expirationDate * 1000);

                            if (currentDate > expirationDate) {
                                socket.emit('grant-access', {
                                    success: false,
                                    msg: constants.AccessDeniedMessage,
                                    data: constants.TokenExpiredErrorMessage
                                });
                            } else {
                                DeviceSchema.updateOne({
                                "invitation.pend.token": token.token
                            }, {
                                invitation: {
                                    pend: {
                                        token: res.invitation.pend.token,
                                        expirationDate: res.invitation.pend.expirationDate,
                                        failCount: res.invitation.pend.failCount
                                    },
                                    auth: {
                                        deviceId: token.deviceId,
                                        date: Date.now()
                                    }
                                }
                            }).then(deviceSchema => {
                                    if (!deviceSchema) {
                                        socket.emit('grant-access', {
                                            success: false,
                                            msg: constants.UpdateUserErrorMessage,
                                            data: {}
                                        });
                                    }
                                    socket.emit('grant-access', {
                                        success: true,
                                        msg: constants.AccessGrantedMessage,
                                        data: res
                                    });
                                });
                            }
                        }
                    });
                }
            });
        } catch (error) {
            socket.emit('grant-access', {
                success: false,
                msg: constants.SocketErrorMessage,
                data: error
            });
        }
    });
};
