'use strict';
let {
    GetUserProfileAvatar,
    GetUserProfileAvatarById,
    PostUserProfileAvatar,
    PutUserProfileAvatarById,
    DeleteUserProfileAvatarById
} = require('../controllers/userProfileAvatar.controller');

module.exports = (api) => {
    api.get('/UserProfileAvatar', GetUserProfileAvatar);
    api.get('/UserProfileAvatar/:userProfileAvatarId', GetUserProfileAvatarById);
    api.post('/UserProfileAvatar', PostUserProfileAvatar);
    api.put('/UserProfileAvatar/:userProfileAvatarId', PutUserProfileAvatarById);
    api.delete('/UserProfileAvatar/:userProfileAvatarId', DeleteUserProfileAvatarById);
};
