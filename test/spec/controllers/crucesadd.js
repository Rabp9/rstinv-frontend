'use strict';

describe('Controller: CrucesaddCtrl', function () {

  // load the controller's module
  beforeEach(module('rstinvFrontendApp'));

  var CrucesaddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CrucesaddCtrl = $controller('CrucesaddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CrucesaddCtrl.awesomeThings.length).toBe(3);
  });
});
