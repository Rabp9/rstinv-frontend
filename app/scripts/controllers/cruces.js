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
       /* $scope.showCrucesAdd = function() {
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/crucesadd.html',
            controller: 'CrucesAddCtrl',
            backdrop: false
        });

        modalInstanceAdd.result.then(function (data) {
            $scope.message = data;
            $scope.getCruces();
        });
    }; */
    
    $scope.showCrucesEdit = function(cruce) {
        var modalInstanceEdit = $uibModal.open({
            templateUrl: 'views/crucesedit.html',
            controller: 'CrucesEditCtrl',
            backdrop: false,
            resolve: {
                id: function() {
                    return cruce.id;
                } 
            }
        });

        modalInstanceEdit.result.then(function (data) {
            $scope.message = data;
            $scope.init();
        });
    };
    
    $scope.showCrucesDelete = function(cruce) {
        if (confirm('¿Está seguro de deshabilitar el servicio?')) {
            cruce.estado_id = 2;
            crucesService.save(cruce, function(data) {
                $scope.message = data;
                $scope.getServicios();
            }, function(error) {
                cruce.estado_id = 1;
            });
        }
    };
    
    $scope.showCrucesActivate = function(cruce) {
        if (confirm('¿Está seguro de activar el servicio?')) {
            servicio.estado_id = 1;
            crucesService.save(servicio, function(data) {
                $scope.message = data;
                $scope.getCruces();
            }, function(error) {
                cruce.estado_id = 2;
            });
        }
    };
    
    $scope.init();
});