const express = require('express');
const { productController } = require('../../controller');
const validate = require('../../middleware/validate');
const { productValidation } = require('../../validation');
const router = express.Router();


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
router.post('/create-products',
  validate(productValidation.createProduct),
  productController.createProducts
);

router.get('/list-products',
  productController.listProducts
);

router.get('/get-products/:productId',
  productController.getProducts
);

router.put('/update-products/:productId',
  validate(productValidation.updateProduct),
  productController.updateProduct
);

router.delete('/delete-products/:productId',
  validate(productValidation.deleteProduct),
  productController.deleteProduct
);

router.get('/search/:productName',
  productController.searchByName
);

router.get('/search-product',
  productController.searchProducts
);

router.get('/list/category/:categoryId',
  productController.listProductByCategory
);

router.get('/list/subcategory/:subcategoryId',
  productController.listProductBySubcategory
);

router.get('/variant-details/:productId',
  productController.variantDetails
);

router.get('/top-rated',
  productController.topRated
);

router.get('/new-arrivals',
  productController.newArrivals
);

router.get('/discounts',
  productController.discounts
);

router.get('/out-of-stock',
  productController.outOfStock
);

router.get('/count-categories',
  productController.countProductByCategory
);

module.exports = router;