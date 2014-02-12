'use strict';

describe('PlayerListCtrl', function() {

  // load the controller's module
  beforeEach(module('scoreBoardApp'));

  var scope,
    controller,
    PlayerResource;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    controller = $controller;
    scope = $rootScope.$new();

    PlayerResource = {
      query: function() {}
    };
  }));

  it('should query for players through the resource', function() {
    spyOn(PlayerResource, 'query').andCallFake(function(opts, callback) {
      callback({
        players: [{
          id: "player1",
          name: "Player 1"
        }, {
          id: "player2",
          name: "Player 2"
        }],
        pagination: {
          nextPage: 2
        }
      });
    });

    var PlayerListCtrl = controller('PlayerListCtrl', {
      $scope: scope,
      PlayerResource: PlayerResource
    });

    expect(PlayerResource.query).toHaveBeenCalled();
  });

  it('should have all the players returned, also after pagination', function() {
    var callNumber = 0;

    spyOn(PlayerResource, 'query').andCallFake(function(opts, callback) {
      callNumber++;

      if (callNumber == 1) {
        callback({
          players: [{
            id: "player1",
            name: "Player 1"
          }, {
            id: "player2",
            name: "Player 2"
          }],
          pagination: {
            nextPage: 2
          }
        });
      } else {
        callback({
          players: [{
            id: "player3",
            name: "Player 3"
          }, {
            id: "player4",
            name: "Player 4"
          }],
          pagination: {
            prevPage: 1
          }
        });
      }
    });

    var PlayerListCtrl = controller('PlayerListCtrl', {
      $scope: scope,
      PlayerResource: PlayerResource
    });

    expect(scope.players.length).toEqual(2);
    expect(scope.disabled).toBe(false);

    scope.loadNextPage();

    expect(scope.players.length).toEqual(4);
    expect(scope.disabled).toBe(true);
  });

  it('should prevent loading next page if it is already loading', function() {
    var callNumber = 0;

    spyOn(PlayerResource, 'query').andCallFake(function(opts, callback) {
      callNumber++;

      if (callNumber == 1) {
        // Don't invoke callback 
      }
    });

    var PlayerListCtrl = controller('PlayerListCtrl', {
      $scope: scope,
      PlayerResource: PlayerResource
    });

    expect(scope.loading).toBe(true);

    // load next page
    scope.loadNextPage();

    // Check that we only have invoked query once
    expect(callNumber).toEqual(1);
    expect(scope.loading).toBe(true);
  });
});