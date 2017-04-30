const controller = require('./cars.controller.js');
const template = require('./cars.html');

const component = {
  controller: controller,
  template: template
}
angular
  .module('mywork')
  .component('cars', component);
