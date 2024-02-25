const express = require('express');
const validate = require('../../middleware/validate');
const { subcategoryValidation } = require('../../validation');
const { subcategoryController } = require('../../controller');

const route = express.Router();

// ========= 01 list-subcategory =========
// route.get('/list-subcategory',
//     subcategoryController.getSubcategories
// );

// ========= 02 get-subcategory By Id =========
// route.get('/get-subcategory/:subcategoryId',
//     subcategoryController.getSubcategories
// );

// ========= 03 parent-of-subcategory =========

// ========= 04 list-by-category =========

// ========= 05 count-active =========
// route.get('/count-active',
//     subcategoryController.getSubcategories
// )

// ========= 09 inactive =========
route.get('/inactive',
    subcategoryController.getSubcategories
)

route.post('/create-subcategory',
    validate(subcategoryValidation.createSubcategory),
    subcategoryController.createSubcategories
);

route.put('/update-subcategory/:subcategoryId',
    validate(subcategoryValidation.updateSubcategory),
    subcategoryController.updateSubcategories
);

route.delete('/delete-subcategory/:subcategoryId',
    validate(subcategoryValidation.deleteSubcategory),
    subcategoryController.deleteSubcategory
);

module.exports = route;