const express = require('express');
const route = express.Router();
const validate = require('../../middleware/validate');
const { categoryValidation } = require('../../validation');
const { categoryController } = require('../../controller');

// =============== GET ===============
// ========= 01 list-category =========
route.get('/list-category',
    categoryController.getCategories
);

// ========= 02 get-category By Id =========
// route.get('/get-category/:categoryId',
//     categoryController.getCategories
// );

// ========= 03 count-active =========
// route.get('/count-active',
//     categoryController.getCategories
// );

// ========= 04 inactive =========
// route.get('/inactive',
//     categoryController.getCategories
// );

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