const controller = require('./playbook.controller.js');
const template = require('./playbook.html');

const component = {
  controller: controller,
  template: template
}
angular
  .module('mywork')
  .component('playbook', component);
