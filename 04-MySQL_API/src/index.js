const express = require('express');
const cors = require('cors')

require('dotenv').config()

const routes = require('./routes/v1');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/v1', routes);


// start server
app.listen(3000, () => {
    console.log('Server Started');
})