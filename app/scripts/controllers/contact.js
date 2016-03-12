'use strict';

/**
 * @ngdoc function
 * @name wdiApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the wdiApp
 */
angular.module('wdiApp')
  .controller('ContactCtrl', function ($scope, $http) {
	$scope.pageClass = 'contact';

	$scope.submit = function(){

 		$http.post('http://api.whodidit.fr/contact', $scope.contact).then(function(success){
 			console.log(success);
 			$scope.complete = true;
 		}, function(error){
 			alert('Une erreur est survenue, veuillez recommencer !');
 		});

 	}

  });
