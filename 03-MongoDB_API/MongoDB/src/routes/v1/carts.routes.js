const express = require('express');
const validate = require('../../middleware/validate');
const { cartValidation } = require('../../validation');
const { cartController } = require('../../controller');
const router = express.Router();

// {
//   "_id": 50,
//   "user_id": 5,
//   "items": [
//     {
//       "product_id": 1,
//       "quantity": 2
//     },
//     {
//       "product_id": 6,
//       "quantity": 5
//     }
//   ]
// }
router.post('/add-to-cart',
  validate(cartValidation.addToCart),
  cartController.addToCart
);

router.get('/user/:userId',
  cartController.user
);

router.put('/update-cart/:cartId',
  validate(cartValidation.updateCart),
  cartController.updateCart
);

router.delete('/delete-cart/:cartId',
validate(cartValidation.deleteCart),
  cartController.deleteCart
);

router.put('/update-quantity/:cartId',
  cartController.updateQuantity
);

module.exports = router;