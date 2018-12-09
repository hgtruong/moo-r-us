var express = require('express');
var app = express();

app.get('/api/cows', (req,res) => {
  res.send("Server is running");
});


app.post('api/cows', (req, res) => {
  res.send("Server is running");
});

module.exports = app;