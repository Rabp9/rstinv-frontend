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
    return $resource(envService.getHost() + 'cruces/:id.json',{}, {
        search: {
            method: 'GET',
            url: envService.getHost() + 'cruces/search/:texto.json'
        },
        searchMany: {
            method: 'GET',
            url: envService.getHost() + 'cruces/searchMany/:search.json'
        }
    });
});