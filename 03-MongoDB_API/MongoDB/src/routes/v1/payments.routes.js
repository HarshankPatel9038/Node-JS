const express = require('express');
const validate = require('../../middleware/validate');
const { paymentValidation } = require('../../validation');
const { paymentController } = require('../../controller');
const router = express.Router();

// {
//   "_id": 50,
//   "order_id": 4,
//   "gateway": "Credit Card",
//   "status": "Rejected"
// }
router.post('/create-payment',
  validate(paymentValidation.createPayment),
  paymentController.createPayment
);

router.get('/list-payment',
  paymentController.listPayment
);

router.get('/get-payment/:paymentId',
  paymentController.getPaymentById
);

router.put('/update-payment/:paymentId',
  validate(paymentValidation.updatePayment),
  paymentController.updatePayment
);

router.delete('/delete-payment/:paymentId',
  validate(paymentValidation.deletePayment),
  paymentController.deletePayment
);

router.get('/order/:orderId',
paymentController.order
);

module.exports = router;