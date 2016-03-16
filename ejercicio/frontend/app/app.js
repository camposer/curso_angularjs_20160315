'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  // Vendor
  'ngRoute',
  'ngBootbox',
  'ngStorage',

  // Scripts
  'myApp.producto',
  'myApp.tienda'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/catalogo'});
}]);