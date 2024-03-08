const express = require('express');
const { variantController } = require('../../controller');
const validate = require('../../middleware/validate');
const { variantValidation } = require('../../validation');
const router = express.Router();


// {
//   "_id": 50,
//   "product_id": 1,
//   "attributes": {
//     "Color": "Red",
//     "Size": "5GB",
//     "Price": 999.99,
//     "Quantity": 50
//   },
//   "isActive": false
// }
router.post('/create-variant',
  validate(variantValidation.createVariant),
  variantController.createVariants
);

router.get('/list-variant',
  variantController.listVariants
);

router.get('/get-variant/:variantId',
  variantController.getVariants
);

router.put('/update-variant/:variantId',
  validate(variantValidation.updateVariant),
  variantController.updateVariants
);

router.delete('/delete-variant/:variantId',
  validate(variantValidation.deleteVariant),
  variantController.deleteVariant
);

router.get('/product/:productId',
  variantController.product
);

router.get('/list-variant/:productId',
  variantController.listVariantByProductId
);

router.get('/count-stock/:productId',
  variantController.countStock
);

router.get('/low-quantity',
  variantController.lowQuantity
);

router.get('/high-price',
  variantController.highPrice
);

router.get('/multiple-variants',
  variantController.multipleVariants
);

router.get('/active',
  variantController.activeVariant
);

router.get('/count-products',
  variantController.countProducts
);

module.exports = router;