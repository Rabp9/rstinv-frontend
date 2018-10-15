'use strict';

/**
 * @ngdoc service
 * @name rstinvFrontendApp.crucesService
 * @description
 * # crucesService
 * Factory in the rstinvFrontendApp.
 */
angular.module('rstinvFrontendApp')
.factory('crucesService', function($resource, envService) {
    return $resource(envService.getHost() + 'cruces/:id.json');
});