(function() {
	angular
		.module('myApp.producto', ['ngRoute'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/producto', {
				templateUrl: 'producto/view/index.html',
				controller: 'myApp.producto.IndexCtrl'
			});
		}]);
})();