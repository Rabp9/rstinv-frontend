'use strict';

/**
 * @ngdoc service
 * @name rstinvFrontendApp.utilsViewService
 * @description
 * # utilsViewService
 * Factory in the rstinvFrontendApp.
 */
angular.module('rstinvFrontendApp')
.factory('$utilsViewService', function () {
    return {
        enable: function(id) {
            $(id).removeClass('disabled');
            $(id).prop('disabled', false);
        },
        disable: function(id) {
            $(id).addClass('disabled');
            $(id).prop('disabled', true);
        }
    };
});