var models = require('../models/index.js');

module.exports = {
  cows: {
    get: function(req, res) {
      // console.log('inside controller get');
      models.cows.get(function(err, results){
        if (err) { throw err; }
        console.log('results in controller', results);
        res.json(results);
      });
    },

    post: function(req, res) {
      var params = [req.body.name, req.body.description];
      models.cows.post(params, function(err, results) {
        if (err) { throw err; }
        res.sendStatus(201);
      });
    }
  }
}