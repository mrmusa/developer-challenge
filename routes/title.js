module.exports = function(app) {
  // Module dependencies.
  var mongoose = require('mongoose'),
    Title = mongoose.models.Title,
    api = {};

  // ALL
  api.titles = function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    var query = req.query.q;
    console.log('q', req.query, query);
    Title.find({
      'TitleName': new RegExp(query, 'i')
    }, 'TitleName TitleId', function(err, titles) {
      if (err) {
        res.json(500, err);
      } else {
        console.log(titles);
        res.json({
          titles: titles
        });
      }
    });
  };

  // GET
  api.title = function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    var titleId = req.params.titleId;
    console.log('titleId', titleId);
    Title.findOne({
      'TitleId': Number(titleId)
    }, function(err, title) {
      if (err) {
        res.json(404, err);
      } else {
        console.log('title', title);
        res.json(200, {
          title: title
        });
      }
    });
  };


  app.get('/api/titles', api.titles);
  app.get('/api/title/:titleId', api.title);
};
