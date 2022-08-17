var express = require('express');
var router = express.Router();

/* GET home page. */

const messages = [
  {
    title: 'sample 1',
    text: "Hi there!",
    user: "Amando",
    added: (new Date()).toLocaleDateString()
  },
  {
    title: 'sample 2',
    text: "Hello World!",
    user: "Charles",
    added: (new Date()).toLocaleDateString()
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});

module.exports = router;
