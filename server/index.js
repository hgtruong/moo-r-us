var express = require('express');
var app = express();
const port = 3000;

console.log('in ha');

app.get('/', (req, res) => res.send("Server is running"));

app.listen(port, () => console.log(`Listening on port ${port}`));