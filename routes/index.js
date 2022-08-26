var express = require('express');
require('dotenv').config();

var moment = require('moment');

var router = express.Router();

let messages = require('../message_data');

/* GET home page. */

router.get('/', function(req, res, next) {
  console.log(messages);
  res.render('index', { title: 'Mini Message Board', messages, moment: moment });
});

router.post('/reset', function (req, res) {
  const data = req.body;
  if(data.password === process.env.RESET_PASSWORD && messages.length > 3)
  {
      messages.splice(3, messages.length-3);
  }
  return res.redirect('/');
});

module.exports = router;
