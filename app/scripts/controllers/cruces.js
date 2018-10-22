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
        $scope.search = {};
    $scope.search.estado_id = '1';
    $scope.page = 1;
    $scope.items_per_page = 10;

    $scope.cruces_ws = {
       wCodigo: '3%',
       wCodigoCruce: '8%',
       wCodigoPunto: '8%',
       wSuministro: '15%',
       wDescripcion: '60%'
   };
       $scope.getCruces = function() {
        $scope.loading = true;
        crucesService.get({
            page: $scope.page,
            cruce_id: $scope.search.cruce_id,
            items_per_page: $scope.items_per_page
        }, function(data) {
            $scope.cruces = data.cruces;
            $scope.pagination = data.pagination;
            $scope.count = data.count;
            $scope.loading = false;
        });
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
        $scope.showCruceDelete = function(cruce) {
        if (confirm('¿Está seguro de eliminar este cruce?')) {
             cruce.cruce_id = 1;
            crucesService.save(cruce, function(data) {
                $scope.message = data;
                $scope.getCruces();
            }, function(error) {
                cruce.cruce_id = 2;
});
        
        }
    };

    $scope.init();
    });