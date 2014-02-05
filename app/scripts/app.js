'use strict';

angular.module('scoreBoardApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]).config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/players', {
      templateUrl: 'views/playerlist.html',
      controller: 'PlayerListCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
