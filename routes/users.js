var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/journey', (req, res, next) => {
  res.render('journey', {title: 'journey'});
});

router.get('/journeytest', (req, res, next) => {
  res.sendFile(path.normalize(__dirname.replace('routes', '') + '/views/testviews/articles.json'));
});

module.exports = router;
