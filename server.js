const express = require('express');
const app = express();
const logger = require('morgan');

// const projectsController = require('./server/controllers/projects.js');
// app.use('/projects', projectsController);

app.use(express.static(__dirname + '/public'));

//Server
// app.listen(4000, function() {
//   console.log('Server now listening sir.');
// });

app.listen(process.env.PORT || 4000, function(){
  // console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  console.log('Server now listening sir.');
});
