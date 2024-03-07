const express = require('express');
const validate = require('../../middleware/validate');
const { subcategoryValidation } = require('../../validation');
const { subcategoryController } = require('../../controller');
const router = express.Router();


// {
//     "_id": 50,
//     "category_id": 1,
//     "subcategory_image": "www.google.com",
//     "subcategory_name": "ABCDEFGHI",
//     "subcategory_desc": "gdvhvxv svx vgvds vjhdsgvjhcx gvjhxgv xcjvhgx vjhxcgvjhxg vjhxcg vjx gvgvjvgxcv",
//     "isActive": false
// }
router.post('/create-subcategory',
    validate(subcategoryValidation.createSubcategory),
    subcategoryController.createSubcategories
);

router.get('/list-subcategory',
    subcategoryController.listSubcategories
);

router.get('/get-subcategory/:categoryId',
    subcategoryController.getSubcategories
);

router.put('/update-subcategory/:subcategoryId',
    validate(subcategoryValidation.updateSubcategory),
    subcategoryController.updateSubcategories
);

router.delete('/delete-subcategory/:subcategoryId',
    validate(subcategoryValidation.deleteSubcategory),
    subcategoryController.deleteSubcategory
);

router.get('/parent-of-subcategory/:subcategoryId',
    subcategoryController.parentOfSubcategory
);

// router.get('/list-by-category/:subcategoryId',
//     subcategoryController.listByCategory
// );

router.get('/count-active',
    subcategoryController.countActiveSubcategory
);

router.get('/most-products',
    subcategoryController.mostProducts
);

router.get('/average-products',
    subcategoryController.averageProducts
);

router.get('/inactive',
    subcategoryController.inActiveSubcategory
);

router.get('/count-products',
    subcategoryController.countProducts
);

module.exports = router;