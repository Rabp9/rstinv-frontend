'use strict';

/**
 * @ngdoc function
 * @name rstinvFrontendApp.controller:CrucesdetalleCtrl
 * @description
 * # CrucesdetalleCtrl
 * Controller of the rstinvFrontendApp
 */
angular.module('rstinvFrontendApp')
  .controller('CrucesdetalleCtrl', function($scope,$http,crucesService, cruce_id) {
       $scope.init = function() {
    crucesService.get({id: cruce_id}, function(data) {
    $scope.cruce = data.cruce;
        });
    };

  
    $scope.init();
  
        
});
   
  
  
  
