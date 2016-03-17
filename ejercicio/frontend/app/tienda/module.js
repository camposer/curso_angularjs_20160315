(function() {
	angular
		.module('myApp.tienda', ['ui.router'])
		.config(['$stateProvider', function($stateProvider) {
			$stateProvider.state('tienda-catalogo', {
				url: '/catalogo',
				templateUrl: 'tienda/view/catalogo.html',
				controller: 'myApp.tienda.CatalogoCtrl as ctrl'
			});
			
			$stateProvider.state('tienda-carrito', {
				url: '/carrito',
				templateUrl: 'tienda/view/carrito.html',
				controller: 'myApp.tienda.CarritoCtrl as ctrl'
			});

		}]);
})();