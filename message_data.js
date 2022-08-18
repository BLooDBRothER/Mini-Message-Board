const moment = require('moment');

const messages = [
    {
      title: 'sample 1',
      text: "Hi there!",
      user: "Amando",
      added: moment("18/08/2022", "DD/MM/YYYY").fromNow()
    },
    {
      title: 'sample 2',
      text: "Hello World!",
      user: "Charles",
      added: moment("11/04/2022", "DD/MM/YYYY").fromNow()
    },
    {
      title: 'sample 3',
      text: "Fun Fun Fun!",
      user: "Donald",
      added: moment("2022-08-18T03:10:37.740Z").fromNow()
    }
];

module.exports = messages;