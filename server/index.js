var express = require('express');
var app = require('./helpers.js');
// const ip = '127.0.0.1';
const port = 3000;

app.listen(port, () => console.log(`Moo-ing on port ${port}`));