const controller = require('./project.controller.js');
const template = require('./project.html');

const component = {
  controller: controller,
  template: template
}

angular
  .module('mywork')
  .component('project', component);
