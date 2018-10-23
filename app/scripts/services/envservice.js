'use strict';

/**
 * @ngdoc service
 * @name rstinvFrontendApp.envService
 * @description
 * # envService
 * Factory in the rstinvFrontendApp.
 */
angular.module('rstinvFrontendApp').factory('envService', function () {
    return {
        getHost: function() {
            switch (window.location.hostname) {
                case 'localhost':
                    return 'http://localhost:8000/rstinv-backend/';
            }
        }
    };
});