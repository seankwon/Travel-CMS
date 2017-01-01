var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/journey', (req, res, next) => {
  res.render('journey', {title: 'journey'});
});

module.exports = router;
