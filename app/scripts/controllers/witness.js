'use strict';

/**
 * @ngdoc function
 * @name wdiApp.controller:WitnessCtrl
 * @description
 * # WitnessCtrl
 * Controller of the wdiApp
 */
angular.module('wdiApp')
  .controller('WitnessCtrl', function ($scope, $http) {
 	$scope.currentPage =  2;
 	$scope.pageClass = 'witness';

 	$scope.submit = function(){
 		
 		var get_data = {
 			alert: $scope.alert,
 			car: $scope.car,
 			user: $scope.user
 		};

 		$http.post('http://api.whodidit.fr/alerts', get_data).then(function(success){
 			console.log(success);
 			$scope.complete = true;
 			$scope.car.registration_number= "";
 			$scope.alert.body= "";
 		}, function(error){
 			alert('Une erreur est survenue, veuillez recommencer !');
 		});

 	}

  });
