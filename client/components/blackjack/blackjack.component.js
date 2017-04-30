const controller = require('./blackjack.controller.js');
const template = require('./blackjack.html');

const component = {
  controller: controller,
  template: template
}
angular
  .module('mywork')
  .component('blackjack', component);
