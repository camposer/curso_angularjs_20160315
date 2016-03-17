(function() {
	angular
		.module('myApp.producto', ['ui.router'])
		.config(['$stateProvider', function($stateProvider) {
			// $routeProvider.when('/producto', {
			// 	templateUrl: 'producto/view/index.html',
			// 	controller: 'myApp.producto.IndexCtrl as ctrl'
			// });
			$stateProvider.state('producto-index', {
				url: '/producto',
				templateUrl: 'producto/view/index.html',
				controller: 'myApp.producto.IndexCtrl as ctrl'
			});
		}]);
})();