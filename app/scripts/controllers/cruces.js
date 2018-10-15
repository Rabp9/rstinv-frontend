'use strict';

/**
 * @ngdoc function
 * @name rstinvFrontendApp.controller:CruceAddCtrl
 * @description
 * # CruceAddCtrl
 * Controller of the rstinvFrontendApp
 */
angular.module('rstinvFrontendApp')
.controller('CrucesCtrl', function ($scope, crucesService) {
    $scope.cruces_ws = {
       wCodigo: '6%',
       wCodigoCruce: '8%',
       wCodigoPunto: '34%',
       wSuministro: '32%',
       wDescripcion: '20%'
   };
    
    $scope.init = function() {
        $scope.loading = true;
        
        crucesService.get(function(data) {
            $scope.cruces = data.cruces;
            $scope.loading = false;
        });
    };
    
    $scope.init();
});