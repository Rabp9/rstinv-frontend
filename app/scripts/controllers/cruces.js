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
            estado_id: $scope.search.estado_id,
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
    
    $scope.$watch('search.estado_id', function(oldValue, newValue) {
        $scope.page = 1;
        $scope.getCruces();
    });
    
    $scope.$watch('search.text', function(oldValue, newValue) {
        $scope.page = 1;
        $scope.getCruces();
    });
    
    $scope.pageChanged = function() {
        $scope.getCruces();
    };
    
    $scope.onChangeTipo = function() {
        $scope.getCruces();
    };
    
    $scope.showCrucesAdd = function() {
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/crucesadd.html',
            controller: 'CrucesAddCtrl',
            backdrop: false
        });

        modalInstanceAdd.result.then(function (data) {
            $scope.message = data;
            $scope.getCruces();
        });
    };
    
    $scope.showCrucesEdit = function(cruce) {
        var modalInstanceEdit = $uibModal.open({
        templateUrl: 'views/crucesedit.html',
        controller: 'CruceseditCtrl',
        backdrop: false,
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
       
    $scope.showCrucesDelete = function(cruce) {
        if (confirm('¿Está seguro de eliminar este cruce?')) {
            cruce.estado_id = 2;
            crucesService.save(cruce, function(data) {
                $scope.message = data;
                $scope.getCruces();
            }, function(error) {
                cruce.estado_id = 1;
            });
        }
    };
    
    $scope.showCucesActivate = function(cruce) {
        if (confirm('¿Está seguro de activar el servicio?')) {
            cruce.estado_id = 1;
            crucesService.save(cruce, function(data) {
                $scope.message = data;
                $scope.getCruces();
            }, function(error) {
                cruce.estado_id = 2;
            });
        }
    };
    
    $scope.onChangeItemsPerPage = function() {
        $scope.page = 1;
        $scope.getCruces();
};

    $scope.init();
});