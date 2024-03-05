const express = require('express');
const routes = require('./routes/v1');
const connectDB = require('./db');
connectDB();
const app = express();
app.use(express.json());
app.use('/api/v1', routes);

// swagger & yaml
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./src/apidocs.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// start server
app.listen(3000, () => {
    console.log('Server Started');
})