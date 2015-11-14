'use strict';

/**
 * @ngdoc function
 * @name wdiApp.controller:SubscribeCtrl
 * @description
 * # SubscribeCtrl
 * Controller of the wdiApp
 */
 angular.module('wdiApp')
 .controller('SubscribeCtrl', function ($scope, $http) {
 	$scope.user = {};
 	$scope.currentPage =  1;

 	$http.get('../data/country-list.json').then(function(success) {
 		$scope.countrylist = success.data.list;
 		console.log(success);
 		$scope.country = $scope.countrylist[75];
 	}, function(error){
 		console.log(error);


 	});


 	$scope.submit = function(){
 		$scope.user["country"] = $scope.country.iso;
 		var get_data = {
 			user: $scope.user,
 			car: $scope.car
 		};

 		$http.post('http://api.whodidit.fr/users', get_data).then(function(success){
 			console.log(success);
 		}, function(error){
 			console.log('error');
 		});

 	}
 });
