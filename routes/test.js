var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/aa', function(req, res, next) {
  res.send("ok 12345");
});

router.get('/', function(req, res, next) {
  res.send("ok index test 111");
});

module.exports = router;
