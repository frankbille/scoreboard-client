'use strict';

angular.module('scoreBoardApp').controller('FooterCtrl', function($scope) {
	$scope.copyYear = new Date().getFullYear();
});
