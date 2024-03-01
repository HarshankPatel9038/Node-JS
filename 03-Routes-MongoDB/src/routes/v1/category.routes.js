const express = require('express');
const route = express.Router();
const validate = require('../../middleware/validate');
const { categoryValidation } = require('../../validation');
const { categoryController } = require('../../controller');

route.get('/list-category',
    categoryController.listCategories
);

route.get('/get-category/:categoryId',
    categoryController.getCategories
);

route.get('/count-active',
    categoryController.countActive
);

route.get('/inactive',
    categoryController.inActive
);

route.get('/most-products',
    categoryController.mostProducts
);

route.get('/average-products',
    categoryController.averageProducts
);

route.get('/count-subcategories',
    categoryController.countSubcategories
);


// {
//     "_id": 50,
//     "category_image": "www.google.com",
//     "category_name": "ABCD",
//     "category_desc": "Lorem Ipsum",
//     "isActive": true
// }
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