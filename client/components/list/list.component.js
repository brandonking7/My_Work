const controller = require('./list.controller.js');
const template = require('./list.html');

const component = {
  controller: controller,
  template: template
}

angular
  .module('mywork')
  .component('list', component);
