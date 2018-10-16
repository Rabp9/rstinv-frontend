'use strict';

/**
 * @ngdoc function
 * @name rstinvFrontendApp.controller:CrucesaddCtrl
 * @description
 * # CrucesaddCtrl
 * Controller of the rstinvFrontendApp
 */
angular.module('rstinvFrontendApp').controller('CrucesAddCtrl', function ($scope, crucesService, $utilsViewService,
    $state, $rootScope) {
    $scope.cruce = {};
    
    $scope.saveCruce = function(cruce, boton) {
        $('#' + boton + ' .btn-text').text('Guardando...');
        $utilsViewService.disable('#' + boton);
        
        cruce.estado_id = 1;
        crucesService.save(cruce, function(data) {
            $utilsViewService.enable('#' + boton);
            $rootScope.message = data;
            if (data.code === 200) {
                $state.go('cruces');
            } else if(data.code === 500) {
                $utilsViewService.enable('#' + boton);
                $('#' + boton + ' .btn-text').text('Guardar');
                $state.go('crucesadd');
            }
        }, function(err) {
            $utilsViewService.enable('#' + boton);
            $('#' + boton + ' .btn-text').text('Guardar');
            $rootScope.message = err.data;
            $state.go('crucesAdd');
        });
    };
});