const express = require('express');

const router = express.Router();

const category = require('./category.routes');
const subcategory = require('./subcategory.routes');
const variant = require('./variant.routes');
const user = require('./users.routes');

router.use('/category', category);
router.use('/subcategory', subcategory);
router.use('/variant', variant)
router.use('/users', user);

module.exports = router;