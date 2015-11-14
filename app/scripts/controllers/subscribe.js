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
 		$http({
 			method:'POST',
 			url:'http://api.whodidit.fr/users',
 			data: get_data,
 			headers: {
 				"Content-Type": "application/json",
 				"Accept": "application/json"
 			}
 		}).then(function(data){
 				console.log(data);
 				$scope.car.registration_number = '';
 			}, function(error){
 				console.log(error);
 				alert('Une erreur est survenue !');
 			});
 			return false;
 		}
 	});
