'use strict';

/**
 * @ngdoc overview
 * @name wdiApp
 * @description
 * # wdiApp
 *
 * Main module of the application.
 */
angular
  .module('wdiApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/subscribe', {
        templateUrl: 'views/subscribe.html',
        controller: 'SubscribeCtrl',
        controllerAs: 'subscribe'
      })
      .when('/witness', {
        templateUrl: 'views/witness.html',
        controller: 'WitnessCtrl',
        controllerAs: 'witness'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl',
        controllerAs: 'history'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
