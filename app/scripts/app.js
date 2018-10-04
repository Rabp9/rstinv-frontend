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
    'ui.router'
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
    
    $stateProvider.state(mainState);
    $stateProvider.state(crucesState);
    $urlRouterProvider.when('', '/');
});