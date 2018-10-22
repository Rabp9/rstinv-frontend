'use strict';

/**
 * @ngdoc function
 * @name rstinvFrontendApp.controller:CruceAddCtrl
 * @description
 * # CruceAddCtrl
 * Controller of the rstinvFrontendApp
 */
angular.module('rstinvFrontendApp')
.controller('CrucesCtrl', function ($scope, $uibModal, crucesService) {
    $scope.cruces_ws = {
       wCodigo: '3%',
       wCodigoCruce: '8%',
       wCodigoPunto: '8%',
       wSuministro: '15%',
       wDescripcion: '66%'
   };
   
    $scope.init = function() {
        $scope.loading = true;
        
        crucesService.get(function(data) {
            $scope.cruces = data.cruces;
            $scope.loading = false;
        });
    };
        $scope.showCrucesEdit = function(cruce) {
        var modalInstanceEdit = $uibModal.open({
        templateUrl: 'views/crucesedit.html',
        controller: 'CruceseditCtrl',
        backdrop: false,
        size: 'lg',
        resolve: {
                cruce_id: function() {
                    return cruce.id;
                } 
            }
        });

        modalInstanceEdit.result.then(function (data) {
            $scope.message = data;
            $scope.init();
        });
    };

    $scope.init();
});