const express = require('express');
const router = express.Router();

const projects = [
  {
    name: 'Blackjack',
    description: 'For project #1, I created a simple game of Blackjack. Once players come to the site, they are shown an alert with a tutorial. Then then hit deal to be dealt a set of cards where the goal of the game is to be the first to 21 or have a bigger score than the dealer period.',
    img: 'https://s3.amazonaws.com/uifaces/faces/twitter/tonypeterson/128.jpg'
  },
  {
    name: 'Cars',
    description: 'For project #1, I created a simple game of Blackjack. Once players come to the site, they are shown an alert with a tutorial. Then then hit deal to be dealt a set of cards where the goal of the game is to be the first to 21 or have a bigger score than the dealer period.',
    img: 'https://s3.amazonaws.com/uifaces/faces/twitter/tonypeterson/128.jpg'
  },
  {
    name: 'Cornholer',
    description: 'For project #1, I created a simple game of Blackjack. Once players come to the site, they are shown an alert with a tutorial. Then then hit deal to be dealt a set of cards where the goal of the game is to be the first to 21 or have a bigger score than the dealer period.',
    img: 'https://s3.amazonaws.com/uifaces/faces/twitter/tonypeterson/128.jpg'
  },

];

router.get('/', function(req, res) {
  res.json({projects: projects});
});

// router.get('/name' function(req, res) {
//
// });
module.exports = router;
