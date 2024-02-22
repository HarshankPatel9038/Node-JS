const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
    console.log('SubCategory Get Successfully');
});

module.exports = route;