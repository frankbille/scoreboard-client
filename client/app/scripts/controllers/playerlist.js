'use strict';

angular.module('scoreBoardApp').controller('PlayerListCtrl', function($scope) {
	$scope.players = [{
		id: 'frank',
		name: 'Frank',
		fullName: 'Frank Bille'
	},{
		id: 'john',
		name: 'John',
		fullName: 'John Doe'
	}];
});