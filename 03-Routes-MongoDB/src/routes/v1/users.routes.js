const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Users Get Successfully');
});

module.exports = router;