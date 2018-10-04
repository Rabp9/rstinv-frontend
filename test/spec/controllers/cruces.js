'use strict';

describe('Controller: CrucesCtrl', function () {

  // load the controller's module
  beforeEach(module('rstinvFrontendApp'));

  var CrucesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CrucesCtrl = $controller('CrucesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CrucesCtrl.awesomeThings.length).toBe(3);
  });
});
