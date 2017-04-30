const controller = require('./cornholer.controller.js');
const template = require('./cornholer.html');

const component = {
  controller: controller,
  template: template
}
angular
  .module('mywork')
  .component('cornholer', component);
