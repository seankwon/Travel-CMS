var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/journeytest', (req, res, next) => {
  res.sendFile(path.normalize(__dirname.replace('routes', '') + '/views/testviews/article.json'));
});

module.exports = router;
