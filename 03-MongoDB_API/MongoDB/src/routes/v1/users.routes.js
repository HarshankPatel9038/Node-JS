const express = require('express');
const { userController } = require('../../controller');
const validate = require('../../middleware/validate');
const { userValidation } = require('../../validation');

const router = express.Router();

// {
//     "_id": 50,
//     "name": "Devin",
//     "address": "Surat",
//     "mobile_no": "1234567890",
//     "email": "test@gmail.com",
//     "password": "test@123",
//     "role": "User"
// }
router.post('/register',
    validate(userValidation.createUser),
    userController.register
);

router.post('/login',
    userController.login
);

router.post('/generate-new-tokens',
    userController.generateNewTokens
);

router.get('/logout',
    userController.logout
);

router.get('/list-user',
    userController.listUser
);

router.get('/get-user/:userId',
    userController.getUser
);

module.exports = router;