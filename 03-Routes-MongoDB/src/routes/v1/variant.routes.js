const express = require('express');
const { variantController } = require('../../controller');
const validate = require('../../middleware/validate');
const { variantValidation } = require('../../validation');
const route = express.Router();

route.get('/list-variant',
  variantController.listVariants
);

route.get('/get-variant/:variantId',
  variantController.getVariants
);

// route.get('/product/:productId',
//   variantController.product
// );

route.get('/active',
  variantController.activeVariant
);

route.get('/count-products',
  variantController.countProducts
);

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
route.post('/create-variant',
  validate(variantValidation.createVariant),
  variantController.createVariants
);

route.put('/update-variant/:variantId',
  validate(variantValidation.updateVariant),
  variantController.updateVariants
);

route.delete('/delete-variant/:variantId',
  validate(variantValidation.deleteVariant),
  variantController.deleteVariant
);

module.exports = route;