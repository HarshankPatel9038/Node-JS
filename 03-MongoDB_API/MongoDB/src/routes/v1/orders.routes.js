const express = require('express');
const validate = require('../../middleware/validate');
const { orderValidation } = require('../../validation');
const { orderController } = require('../../controller');
const router = express.Router();


// {
//   "_id": 50,
//   "user_id": 1,
//   "payment_id": 103,
//   "products": [
//     {
//       "product_id": 1,
//       "quantity": 2
//     },
//     {
//       "product_id": 5,
//       "quantity": 2
//     }
//   ],
//   "shipping_address": "demo, Surat",
//   "total_amount": 1500.00,
//   "status": "Completed",
//   "discount": 20
// }
router.post('/place-order',
  validate(orderValidation.placeOrder),
  orderController.placeOrder
);

router.get('/list-order',
  orderController.listOrders
);

router.get('/get-order/:orderId',
  orderController.getOrdersById
);

router.put('/update-order/:orderId',
  validate(orderValidation.updateOrder),
  orderController.updateOrder
);

router.delete('/delete-order/:orderId',
  validate(orderValidation.deleteOrder),
  orderController.deleteOrder
);

router.get('/user/:userId',
  orderController.user
);

router.get('/seller/:userId',
  orderController.seller
);

router.get('/product/:productId',
  orderController.product
);

router.put('/cancel/:orderId',
  orderController.cancel
);

module.exports = router;