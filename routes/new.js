var express = require('express');
var router = express.Router();

/* Create New Message. */
router.get('/', function(req, res, next) {
  res.render('new', {title: 'Mini Message Board'});
});

module.exports = router;
