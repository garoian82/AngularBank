
var myApp = angular.module('myApp',[]);
	myApp.controller('AccountController', ['$scope', function($scope){

		
		$scope.balance = 100;
		$scope.add = add;
		$scope.subtract = subtract;
		
		// credits account balance when a user inputs a Deposit amount.
		function add(num) {
			return $scope.balance += parseFloat(num);
		}
		// Debits account balance when a user inputs a Debit amount.
		function subtract(num) {
			console.log(num);
			return $scope.balance -= parseFloat(num);
		}
	
	}]);








