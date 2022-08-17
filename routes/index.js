var express = require('express');
var router = express.Router();

const messages = require('../public/javascripts/message_data');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});

module.exports = router;
