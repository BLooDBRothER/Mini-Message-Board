var express = require('express');
var router = express.Router();

const messages = require('../message_data');

/* Create New Message. */
router.get('/', function(req, res, next) {
  res.render('new', {title: 'Mini Message Board'});
});

router.post('/', (req, res, err) => {
  const data = req.body;
  const message = {...data,  added: (new Date()).toLocaleDateString()};
  messages.push(message);
  return res.redirect('/');
});

module.exports = router;
