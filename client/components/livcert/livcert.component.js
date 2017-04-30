const controller = require('./livcert.controller.js');
const template = require('./livcert.html');

const component = {
  controller: controller,
  template: template
}
angular
  .module('mywork')
  .component('livcert', component);
