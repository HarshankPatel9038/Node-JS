const express = require('express');
const { productController } = require('../../controller');
const validate = require('../../middleware/validate');
const { productValidation } = require('../../validation');
const route = express.Router();


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

route.get('/list-products',
  productController.listProducts
);

route.get('/get-products/:productId',
  productController.getProducts
);

route.put('/update-products/:productId',
  validate(productValidation.updateProduct),
  productController.updateProduct
);

route.delete('/delete-products/:productId',
  validate(productValidation.deleteProduct),
  productController.deleteProduct
);

route.get('/search/:productName',
  productController.searchByName
);

route.get('/list/category/:categoryId',
  productController.listProductByCategory
);

route.get('/list/subcategory/:subcategoryId',
  productController.listProductBySubcategory
);

route.get('/top-rated',
  productController.topRated
);

route.get('/new-arrivals',
  productController.newArrivals
);

route.get('/out-of-stock',
  productController.outOfStock
);

route.get('/count-categories',
  productController.countProductByCategory
);

module.exports = route;