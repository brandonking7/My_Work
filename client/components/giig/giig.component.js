const controller = require('./giig.controller.js');
const template = require('./giig.html');

const component = {
  controller: controller,
  template: template
}
angular
  .module('mywork')
  .component('giig', component);
