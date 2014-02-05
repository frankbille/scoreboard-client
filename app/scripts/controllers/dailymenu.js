'use strict';

angular.module('scoreBoardApp').controller('DailyMenuCtrl', function($scope) {
	$scope.leagues = [{
		id: 1,
		name: 'League 1'
	}, {
		id: 2,
		name: 'League 2'
	}];
});
