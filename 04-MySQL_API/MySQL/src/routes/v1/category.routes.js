const express = require('express');
const router = express.Router();
const { categoryController } = require('../../controller');


router.post('/create-category',
    categoryController.createCategories
);

router.get('/get-category',
    categoryController.getCategories
);

router.get('/list-category/:Id',
    categoryController.listCategories
);

router.put('/update-category/:Id',
    categoryController.updateCategory
);

router.delete('/delete-category/:Id',
    categoryController.deleteCategory
);

module.exports = router;