var mysql = require('mysql');


var connection = mysql.createConnection({
  user     : 'root',
  password : '',
  database : 'cows'
});

connection.connect();

module.exports = connection;