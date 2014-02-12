'use strict';

angular.module('scoreBoardApp').controller('PlayerListCtrl', function($scope, PlayerResource) {
  $scope.players = [];
  $scope.loading = false;
  $scope.disabled = false;
  $scope.nextPage = 1;

  $scope.loadNextPage = function() {
    if ($scope.loading) return;
    $scope.loading = true;

    PlayerResource.query({
      page: $scope.nextPage
    }, function(playerList) {
      for (var i = 0; i < playerList.players.length; i++) {
        $scope.players.push(playerList.players[i]);
      }
      if (angular.isDefined(playerList.pagination.nextPage)) {
        $scope.nextPage = playerList.pagination.nextPage;
      } else {
        $scope.disabled = true;
      }
      $scope.loading = false;
    });
  };

  $scope.loadNextPage();
});
