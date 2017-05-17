const express = require('express');
const app = express();
const logger = require('morgan');

// const projectsController = require('./server/controllers/projects.js');
// app.use('/projects', projectsController);

app.use(express.static(__dirname + '/public'));

//Server
app.listen(4000, function() {
  console.log('Server now listening sir.');
});
