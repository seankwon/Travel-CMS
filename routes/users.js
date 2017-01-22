var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/users/articles', (req, res, next) => {
  res.sendFile(path.normalize(__dirname.replace('routes', '') + '/views/testviews/articles.json'));
});

router.post('/users/articles', (req, res, next) => {
  res.send('Save Successful');
});

module.exports = router;
