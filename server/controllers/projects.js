const express = require('express');
const router = express.Router();

const projects = [
  {
    name:
    description:
    imageUrl:
  }
];

router.get('/', function(req, res) {
  res.json({projects: projects});
});

router.get('/name' function(req, res) {

});
