const controller = require('./vagabond.controller.js');
const template = require('./vagabond.html');

const component = {
  controller: controller,
  template: template
}
angular
  .module('mywork')
  .component('vagabond', component);
