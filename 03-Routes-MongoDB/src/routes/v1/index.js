const express = require('express');

const route = express.Router();

const category = require('./category.routes');
const subcategory = require('./subcategory.routes');
// const variant = require('./variant.routes');
const user = require('./users.routes');

route.use('/category', category);
route.use('/subcategory', subcategory);
// route.use('/variant', variant);
route.use('/users', user);

module.exports = route;