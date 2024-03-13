const express = require('express');
const routes = require('./routes/v1');
const pool = require('./db');
pool();
const app = express();
app.use(express.json());
app.use('/api/v1', routes);


// start server
app.listen(3000, () => {
    console.log('Server Started');
})