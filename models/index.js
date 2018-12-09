var db = require('../db');

module.exports = {
  cows: {
    get: (callback) => {
      var queryString = 'select * from cows;'
      // db.query();
    },

    post: (params, callback) => {
      var queryString = 'insert into cows(name, description) values ( ? , ?);';
      db.query(queryString, params, function(err, results){
        callback(err, results);
      });
    }
  }
}