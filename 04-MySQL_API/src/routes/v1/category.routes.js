const express = require('express');
const router = express.Router();
const { categoryController } = require('../../controller');


router.get('/get-data',
    categoryController.listCategories
);

module.exports = router;