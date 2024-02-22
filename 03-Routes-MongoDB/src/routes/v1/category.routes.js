const express = require('express');
const route = express.Router();
const joi = require('joi');
const validate = require('../../middleware/validate');
const { categoryValidation } = require('../../validation');
const { categoryController } = require('../../controller');

route.get('/get-category',
    validate(categoryValidation.getCategory),
    categoryController.getCategories
);

route.post('/create-category',
    validate(categoryValidation.createCategory),
    categoryController.createCategories
);

route.put('/update-category/:categoryId',
    validate(categoryValidation.updateCategory),
    categoryController.updateCategories
);

route.delete('/delete-category/:categoryId',
    validate(categoryValidation.deleteCategory),
    categoryController.deleteCategories
);

module.exports = route;