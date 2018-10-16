'use strict';

/**
 * @ngdoc overview
 * @name rstinvFrontendApp
 * @description
 * # rstinvFrontendApp
 *
 * Main module of the application.
 */
angular
.module('rstinvFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'angularValidator'
])
.config(function($stateProvider, $urlRouterProvider) {
    // $httpProvider.interceptors.push('oauthHttpInterceptor');
    var mainState = {
        name: 'main',
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        title: 'Home'
    };   
    
    var crucesState = {
        name: 'cruces',
        url: '/cruces',
        templateUrl: 'views/cruces.html',
        controller: 'CrucesCtrl',
        controllerAs: 'cruces',
        title: 'Cruces'
    };  
    
    var crucesAddState = {
        name: 'crucesAdd',
        url: '/cruces/add',
        templateUrl: 'views/crucesadd.html',
        controller: 'CrucesAddCtrl',
        controllerAs: 'crucesAdd',
        title: 'Nuevo Cruce'
    };
    var crucesEditState = {
        name: 'crucesEdit',
        url: '/cruces/edit',
        templateUrl: 'views/crucesedit.html',
        controller: 'CrucesEditCtrl',
        controllerAs: 'crucesEdit',
        title: 'Editar Cruce'
    };  
    
    $stateProvider.state(mainState);
    $stateProvider.state(crucesState);
    $stateProvider.state(crucesAddState);
    $stateProvider.state(crucesEditState);
    $urlRouterProvider.when('', '/');
});