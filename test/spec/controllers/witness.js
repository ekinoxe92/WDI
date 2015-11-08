'use strict';

describe('Controller: WitnessCtrl', function () {

  // load the controller's module
  beforeEach(module('wdiApp'));

  var WitnessCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WitnessCtrl = $controller('WitnessCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WitnessCtrl.awesomeThings.length).toBe(3);
  });
});
