const express = require('express');

const route = express.Router();

const category = require('./category.routes');
const subcategory = require('./subcategory.routes');
const user = require('./users.routes');

route.use('/category', category);
route.use('/subcategory', subcategory);
route.use('/users', user);

module.exports = route;