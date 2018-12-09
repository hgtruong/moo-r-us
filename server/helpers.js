var express = require('express');
var controllers = require('../controllers');
var parser = require('body-parser');
var app = express();

// Middleware to parse the body
app.use(parser.json());

app.get('/api/cows', (req,res) => {
  console.log('inside get request');
  controllers.cows.get(req, res);
});


app.post('/api/cows', (req, res) => {
  console.log('inside post request');
  controllers.cows.post(req, res);
});

module.exports = app;