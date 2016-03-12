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
 	$scope.pageClass = 'subscribe';

 	$scope.submit = function(){
 		var get_data = {
 			user: $scope.user,
 			car: $scope.car
 		};

 		$http.post('http://api.whodidit.fr/users', get_data).then(function(success){
 			console.log(success);
 			$scope.complete = true;
 			$scope.car.registration_number= "";
 		}, function(error){
 			alert('Une erreur est survenue, veuillez recommencer !');
 		});

 	}
 });
