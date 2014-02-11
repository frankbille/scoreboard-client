'use strict';

angular.module('scoreBoardApp').controller('PlayerListCtrl', function($scope, PlayerResource) {
  $scope.$watch('page', function(newValue) {
    var playerList = PlayerResource.query({
      page: newValue
    }, function() {
      $scope.players = playerList.players;
      $scope.pagination = playerList.pagination;
    });
  });

  $scope.page = 1;

  $scope.goto = function(page) {
    $scope.page = page;
  };

});
