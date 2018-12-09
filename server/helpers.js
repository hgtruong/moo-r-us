var express = require('express');
var controllers = require('../controllers');
var parser = require('body-parser');
var app = express();

//Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Middleware to parse the body
app.use(parser.json());

app.get('/api/cows', (req,res) => {
  // console.log('inside get request');
  controllers.cows.get(req, res);
});


app.post('/api/cows', (req, res) => {
  // console.log('inside post request');
  controllers.cows.post(req, res);
});

module.exports = app;