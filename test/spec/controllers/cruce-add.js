'use strict';

describe('Controller: CruceAddCtrl', function () {

  // load the controller's module
  beforeEach(module('rstinvFrontendApp'));

  var CruceAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CruceAddCtrl = $controller('CruceAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CruceAddCtrl.awesomeThings.length).toBe(3);
  });
});
