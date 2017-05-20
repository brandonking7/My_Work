const angular = require('angular');
require('angular-ui-router');
// require('angular-animate')

angular
  .module('mywork', ['ui.router', 'ngAnimate'])
  .config(uiRouterSetup);

  uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

  function uiRouterSetup($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    })
    .state('portfolio', {
      url: '/portfolio',
      template: '<portfolio></portfolio>'
    })
    .state('list', {
      url: '/list',
      template: '<list></list>'
    })
    .state('blackjack', {
      url: '/blackjack',
      template: '<blackjack></blackjack>'
    })
    .state('livcert', {
      url: '/livcert',
      template: '<livcert></livcert>'
    })
    .state('cornholer', {
      url: '/cornholer',
      template: '<cornholer></cornholer>'
    })
    .state('cars', {
      url: '/cars',
      template: '<cars></cars>'
    })
    .state('vagabond', {
      url: '/vagabond',
      template: '<vagabond></vagabond>'
    })
    .state('giig', {
      url: '/giig',
      template: '<giig></giig>'
    });
    $urlRouterProvider.otherwise('/');
  }
