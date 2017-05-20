var express = require('express');
var router = express.Router();

/* GET home page. */////
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express 框架测试123' });
});

module.exports = router;//
