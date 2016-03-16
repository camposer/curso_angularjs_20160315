(function() {
	angular
		.module('myApp.tienda', ['ngRoute'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/catalogo', {
				templateUrl: 'tienda/view/catalogo.html',
				controller: 'myApp.tienda.CatalogoCtrl as ctrl'
			});
			$routeProvider.when('/carrito', {
				templateUrl: 'tienda/view/carrito.html',
				controller: 'myApp.tienda.CarritoCtrl as ctrl'
			});
		}]);
})();