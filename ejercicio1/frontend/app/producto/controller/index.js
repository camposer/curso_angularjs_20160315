'use strict';

(function() {

	angular
		.module('myApp.producto')
		.controller('myApp.producto.IndexCtrl', [ '$scope', 
			'myApp.producto.ProductoService', 
			IndexCtrl ]);

	function IndexCtrl($scope, productoService) {
		$scope.producto = productoService.obtenerProductos();
	}

})();