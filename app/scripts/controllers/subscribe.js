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

 	$scope.currentPage =  1;

 	$scope.submit = function(){
 		var get_data = {
 			user: $scope.user,
 			car: $scope.car
 		};
 		$http.post('http://api.whodidit.fr/users', get_data).then(function(data){
 			console.log(data);
 			$scope.car.registration_number = '';
 		}, function(error){
 			console.log(error);
 			alert('Une erreur est survenue !');
 		});
 		return false;
 	}
 });
