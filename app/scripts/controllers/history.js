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
 	$scope.pageClass = 'history';

 	// trigger form data
 	$scope.submit = function(){
 		$http.get('http://api.whodidit.fr/alerts?user[email]='+ $scope.user.email).then(function(success){
 			console.log(success);
 			$scope.complete = true;
 			$scope.contact.message = "";
 		}, function(error){
 			alert('Une erreur est survenue, veuillez recommencer !');
 		});
 	};
  });
