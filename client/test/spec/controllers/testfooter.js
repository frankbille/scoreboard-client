'use strict';

describe('FooterCtrl', function() {

  // load the controller's module
  beforeEach(module('scoreBoardApp'));

  var scope,
    FooterCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();

    FooterCtrl = $controller('FooterCtrl', {
      $scope: scope
    });
  }));

  it('should set the current year', function() {
    expect(scope.copyYear).toEqual(new Date().getFullYear());
  });
});