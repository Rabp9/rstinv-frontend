'use strict';

describe('Service: crucesService', function () {

  // load the service's module
  beforeEach(module('rstinvFrontendApp'));

  // instantiate service
  var crucesService;
  beforeEach(inject(function (_crucesService_) {
    crucesService = _crucesService_;
  }));

  it('should do something', function () {
    expect(!!crucesService).toBe(true);
  });

});
