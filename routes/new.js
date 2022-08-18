var express = require('express');
var router = express.Router();

const moment = require('moment');

const messages = require('../message_data');

const addedDateString = () => {
  return moment().toDate();
}

/* Create New Message. */
router.get('/', function(req, res, next) {
  res.render('new', {title: 'Mini Message Board'});
});

router.post('/', (req, res, err) => {
  const data = req.body;
  const message = {...data,  added: moment(addedDateString()).fromNow()};
  messages.push(message);
  return res.redirect('/');
});

module.exports = router;
