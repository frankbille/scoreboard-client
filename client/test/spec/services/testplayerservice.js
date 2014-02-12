'use strict';

describe('PlayerResource', function() {

  // load the controller's module
  beforeEach(module('scoreBoardApp'));

  var mockPlayerResource,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    mockPlayerResource = $injector.get('PlayerResource');
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
  });

  it('should call query', function() {
    $httpBackend.expectGET('/api/players').respond({
    	players: [{
    		id: 'player1',
    		name: 'Player 1'
    	}],
    	pagination: {
    		nextPage: 2
    	}
    });

    var result = mockPlayerResource.query();

    $httpBackend.flush();

    expect(result.players.length).toEqual(1);
  });

  it('should call query with page parameter', function() {
    $httpBackend.expectGET('/api/players?page=2').respond({
    	players: [{
    		id: 'player2',
    		name: 'Player 2'
    	}],
    	pagination: {
    		nextPage: 3
    	}
    });

    var result = mockPlayerResource.query({page: 2});

    $httpBackend.flush();

    expect(result.players.length).toEqual(1);
  });
});