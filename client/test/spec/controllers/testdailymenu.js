'use strict';

describe('Controller: DailyMenuCtrl', function () {

  // load the controller's module
  beforeEach(module('scoreBoardApp'));

  var DailymenucontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DailymenucontrollerCtrl = $controller('DailyMenuCtrl', {
      $scope: scope
    });
  }));

  it('should have leagues', function () {
    expect(scope.leagues.length).toBeGreaterThan(0);
  });
});
