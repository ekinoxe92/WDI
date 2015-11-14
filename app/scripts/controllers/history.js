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

 	$http({
 			method:'GET',
 			url:'http://api.whodidit.fr/alerts?user[email]=thomas@oxyum.fr'
 		}).then(function(data){
 				console.log(data);
 			}, function(error){
 				console.log(error);
 				alert('Une erreur est survenue !');
 			});

  });
