'use strict';

describe('Controller: CruceseditCtrl', function () {

  // load the controller's module
  beforeEach(module('rstinvFrontendApp'));

  var CruceseditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CruceseditCtrl = $controller('CruceseditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CruceseditCtrl.awesomeThings.length).toBe(3);
  });
});
