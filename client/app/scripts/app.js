'use strict';

angular.module('scoreBoardApp', [
  'ngResource',
  'ngRoute',
  'ui.gravatar',
  'tagged.directives.infiniteScroll'
]).config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    });
  $routeProvider.when('/players', {
      templateUrl: 'views/playerlist.html',
      controller: 'PlayerListCtrl'
    });
  $routeProvider.otherwise({
      redirectTo: '/'
    });
});

angular.module('ui.gravatar').config([
  'gravatarServiceProvider', function(gravatarServiceProvider) {
    gravatarServiceProvider.defaults = {
      "default": 'identicon'  // Mystery man as default for missing avatars
    };

    // Use https endpoint
    gravatarServiceProvider.secure = true;
  }
]);
