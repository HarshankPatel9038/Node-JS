const express = require('express');
const { userController } = require('../../controller');

const router = express.Router();

router.get('/list-user',
    userController.listUser
);

router.get('/get-user/:userId',
    userController.getUser
);

module.exports = router;