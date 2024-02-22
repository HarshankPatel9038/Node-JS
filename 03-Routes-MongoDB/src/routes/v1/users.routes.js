const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
    console.log('Users Get Successfully');
});

module.exports = route;