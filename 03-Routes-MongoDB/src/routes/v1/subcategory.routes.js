const express = require('express');
const validate = require('../../middleware/validate');
const { subcategoryValidation } = require('../../validation');
const { subcategoryController } = require('../../controller');

const route = express.Router();

route.get('/list-subcategory',
    subcategoryController.listSubcategories
);

route.get('/get-subcategory/:subcategoryId',
    subcategoryController.getSubcategories
);

route.get('/parent-of-subcategory/:subcategoryId',
    subcategoryController.parentOfSubcategory
);

route.get('/list-by-category/:subcategoryId',
    subcategoryController.listByCategory
);

route.get('/most-products',
    subcategoryController.mostProducts
);

route.get('/count-active',
    subcategoryController.countActiveSubcategory
)

route.get('/inactive',
    subcategoryController.inActiveSubcategory
)

route.get('/count-products',
    subcategoryController.countProducts
)

// {
//     "_id": 50,
//     "category_id": 1,
//     "subcategory_image": "www.google.com",
//     "subcategory_name": "ABCDEFGHI",
//     "subcategory_desc": "gdvhvxv svx vgvds vjhdsgvjhcx gvjhxgv xcjvhgx vjhxcgvjhxg vjhxcg vjx gvgvjvgxcv",
//     "isActive": false
// }
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