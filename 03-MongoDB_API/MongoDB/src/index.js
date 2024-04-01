require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const routes = require('./routes/v1');
const connectDB = require('./db');
const connectPassport = require('./services/Provider');

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
}))

app.use(session({
    secret: process.env.GOOGLE_SECRET_KEY,
    resave: true,
    saveUninitialized: true
}));
app.use(session({
    secret: process.env.FACEBOOK_SECRET_KEY,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

connectPassport();
app.use('/api/v1', routes);
app.use(require('body-parser').urlencoded({ extended: true }));


// swagger & yaml
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