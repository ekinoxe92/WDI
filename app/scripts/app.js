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
    'ngTouch',
    'hmTouchEvents'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/subscribe.html',
        controller: 'SubscribeCtrl',
        controllerAs: 'subscribe'
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
  }).run(function($rootScope, $location){
    $rootScope.toggleNavigation = function(){
      $rootScope.open = !$rootScope.open;
    };
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
      $rootScope.open = false;
    });
  

  
  $rootScope.redirect = function(url){
    $location.path('/' + url);
  };

  

  });
