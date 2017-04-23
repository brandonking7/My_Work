const angular = require('angular');
require('angular-ui-router')

angular
  .module('mywork', ['ui.router'])
  .config(uiRouterSetup);

  uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

  function uiRouterSetup($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    })
    .state('about', {
      url: '/about',
      template: '<about></about>'
    })
    .state('list', {
      url: '/list',
      template: '<list></list>'
    })
    .state('project', {
      url: '/project',
      template: '<project></project>'
    });
    $urlRouterProvider.otherwise('/');
  }
