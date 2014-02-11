'use strict';

angular.module('scoreBoardApp').factory('PlayerResource', function($resource) {
	return $resource('/api/players', {}, {
		query: {
			method: 'GET',
			isArray: false
		}
	});
});
