'use strict';

/**
 * @ngdoc overview
 * @name mainPageApp
 * @description
 * # mainPageApp
 *
 * Main module of the application.
 */

var app = angular.module('KainosApp', ['ngRoute']);
app.config(['$routeProvider',
  
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/mainPage.html',
        controller: 'mainApp'
      }).
       when('/topGenre', {
        templateUrl: 'views/gatunki.html',
        controller: 'GatunkiCtrl'
      }).
       when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
}]);
  

