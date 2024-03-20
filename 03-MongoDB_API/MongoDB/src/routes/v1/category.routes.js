const express = require('express');
const router = express.Router();
const validate = require('../../middleware/validate');
const { categoryValidation } = require('../../validation');
const { categoryController } = require('../../controller');
const auth = require('../../middleware/auth');


// {
//     "_id": 50,
//     "category_image": "www.google.com",
//     "category_name": "ABCD",
//     "category_desc": "Lorem Ipsum",
//     "isActive": true
// }
router.post('/create-category',
    validate(categoryValidation.createCategory),
    categoryController.createCategories
);

router.get('/list-category',
    auth(['Admin', 'User']),
    categoryController.listCategories
);

router.get('/get-category/:categoryId',
    categoryController.getCategories
);

router.put('/update-category/:categoryId',
    validate(categoryValidation.updateCategory),
    categoryController.updateCategories
);

router.delete('/delete-category/:categoryId',
    validate(categoryValidation.deleteCategory),
    categoryController.deleteCategories
);

router.get('/count-active',
    categoryController.countActive
);

router.get('/most-products',
    categoryController.mostProducts
);

router.get('/average-products',
    categoryController.averageProducts
);

router.get('/inactive',
    categoryController.inActive
);

router.get('/count-subcategories',
    categoryController.countSubcategories
);

module.exports = router;