'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  // Vendor
  //'ngRoute',
  'ui.router',
  'ngBootbox',
  'ngStorage',

  // Scripts
  'myApp.producto',
  'myApp.tienda'
]).
config(['$stateProvider', function($stateProvider) {
  //$stateProvider.otherwise({redirectTo: '/catalogo'});
}]);