'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  // Vendor
  'ngRoute',

  // Scripts
  'myApp.producto'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/producto'});
}]);