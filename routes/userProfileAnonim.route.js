'use strict';
let {
    GetUserProfileAnonim,
    GetUserProfileAnonimById,
    PostUserProfileAnonim,
    PutUserProfileAnonimById,
    DeleteUserProfileAnonimById
} = require('../controllers/userProfileAnonim.controller');

module.exports = (api) => {
    api.get('/UserProfileAnonim', GetUserProfileAnonim);
    api.get('/UserProfileAnonim/:userProfileAnonimId', GetUserProfileAnonimById);
    api.post('/UserProfileAnonim', PostUserProfileAnonim);
    api.put('/UserProfileAnonim/:userProfileAnonimId', PutUserProfileAnonimById);
    api.delete('/UserProfileAnonim/:userProfileAnonimId', DeleteUserProfileAnonimById);
};
