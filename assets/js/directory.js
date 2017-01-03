angular.module('directoryApp', [])
	.controller('directoryController', function ($scope) {
		$scope.list = [
			{name: 'Scott', age: 29},
			{name: 'Ben', age: 32},
			{name: 'Ross', age: 31},
			{name: 'Courtney', age: 29}
		]
	});
