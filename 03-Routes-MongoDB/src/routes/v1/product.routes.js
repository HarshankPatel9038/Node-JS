const express = require('express');
const { productController } = require('../../controller');
const validate = require('../../middleware/validate');
const { productValidation } = require('../../validation');
const route = express.Router();

route.get('/list-products',
  productController.listProducts
);


// {
//   "_id": 50,
//   "category_id": 4,
//   "subcategory_id": 7,
//   "variant_id": 9,
//   "image": "www.google.com",
//   "name": "ABCD",
//   "description": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
//   "isActive": false
// }
route.post('/create-products',
  validate(productValidation.createProduct),
  productController.createProducts
);

route.put('/update-products/:productId',
  validate(productValidation.updateProduct),
  productController.updateProduct
);

route.delete('/delete-products/:productId',
  validate(productValidation.deleteProduct),
  productController.deleteProduct
);

module.exports = route;