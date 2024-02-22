const express = require('express');
const routes = require('./routes/v1');
const connectDB = require('./db');

connectDB();

const app = express();

app.use(express.json());

app.use('/api/v1', routes);

app.listen(3000, () => {
    console.log('Server Started');
})