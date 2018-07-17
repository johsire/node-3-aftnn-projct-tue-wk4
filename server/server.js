const bodyParser = require('body-parser');
import Swag from '../src/components/Checkout/Swag/Swag';
const express = require('express');
const session = require('express-session');
require('dotenv').config();

// Controllers:
const swag_controller = require('./controllers/swag_controller')

// require our middleware in server.js file:
const checkForSession = require('./middlewares/checkForSession');

// create express app;
const app = express();

// top level middleware:
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  reave:fals,
  saveUninitialized: false
})
);

// End-points/ Swag:
app.get('/api/swag', swag_controller.read);


// we use app.use to add checkForSession
app.use(checkForSession);

// access our port in .env file;
// const { SERVER_PORT } = process.env;
const SERVER_PORT = process.env.SERVER_PORT || 300;
app.listen(SERVER_PORT, () => {
  console.log(`Kevin Hart - Its about to go down on port: ${SERVER_PORT}`);
});