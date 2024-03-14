const express = require('express');
const router = express.Router();
const { categoryController } = require('../../controller');


router.post('/create-data',
    categoryController.createCategories
);

router.get('/get-data',
    categoryController.getCategories
);

router.get('/list-data/:Id',
    categoryController.listCategories
);

router.put('/update-data/:Id',
    categoryController.updateCategory
);

router.delete('/delete-data/:Id',
    categoryController.deleteCategory
);

module.exports = router;