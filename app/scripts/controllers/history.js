'use strict';

/**
 * @ngdoc function
 * @name wdiApp.controller:HistoryCtrl
 * @description
 * # HistoryCtrl
 * Controller of the wdiApp
 */
angular.module('wdiApp')
  .controller('HistoryCtrl', function ($scope, $http) {
 	$scope.currentPage =  3;
 		$http.get('http://api.whodidit.fr/alerts?user[email]=rudy@oxyum.fr').then(function(success){
 			console.log(success);
 		}, function(error){
 			console.log('error');
 		});
  });
