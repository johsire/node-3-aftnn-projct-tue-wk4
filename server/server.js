const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
require('dotenv').config();

// access our port in .env file;
const { SERVER_PORT } = process.env;

// create express app;
const app = express();

// top level middleware -(global) 
app.use(bodyParser.json());
app.use(session({
  secret: toptopsecret,
  reave:fals,
  saveUninitialized: false
})
);
