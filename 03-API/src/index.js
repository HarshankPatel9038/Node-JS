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
var options = {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: "Ecommerce API Documentation",
    // customfavIcon: "/assets/favicon.ico",
};
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

// start server
app.listen(3000, () => {
    console.log('Server Started');
})