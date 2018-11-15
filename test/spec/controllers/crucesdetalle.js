'use strict';

describe('Controller: CrucesdetalleCtrl', function () {

  // load the controller's module
  beforeEach(module('rstinvFrontendApp'));

  var CrucesdetalleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CrucesdetalleCtrl = $controller('CrucesdetalleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CrucesdetalleCtrl.awesomeThings.length).toBe(3);
  });
});
