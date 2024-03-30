const express = require('express');

const router = express.Router();

const category = require('./category.routes');
const subcategory = require('./subcategory.routes');
const variant = require('./variant.routes');
const product = require('./product.routes');
const review = require('./review.routes');
const user = require('./users.routes');
const order = require('./orders.routes');
const payment = require('./payments.routes');
const cart = require('./carts.routes');

router.use('/category', category);
router.use('/subcategory', subcategory);
router.use('/variant', variant);
router.use('/product', product);
router.use('/review', review);
router.use('/user', user);
router.use('/order', order);
router.use('/payment', payment);
router.use('/cart', cart);

module.exports = router;