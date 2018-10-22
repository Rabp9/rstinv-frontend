'use strict';

/**
 * @ngdoc function
 * @name rstinvFrontendApp.controller:CruceseditCtrl
 * @description
 * # CruceseditCtrl
 * Controller of the rstinvFrontendApp
 */
angular.module('rstinvFrontendApp')
  .controller('CruceseditCtrl', function ($scope, $utilsViewService,crucesService, $uibModalInstance, cruce_id) {
    $scope.init = function() {
    crucesService.get({id: cruce_id}, function(data) {
    $scope.cruce = data.cruce;
        });
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
     };
     
      $scope.saveCruce = function(cruce, boton) {
        $('#' + boton + ' .btn-text').text('Modificando...');
        $utilsViewService.disable('#' + boton);
       
        crucesService.save( cruce, function (data) {
            $uibModalInstance.close(data);
        }, function (err) {
            $uibModalInstance.close(err.data);
        });
    };
    $scope.init();
  });
