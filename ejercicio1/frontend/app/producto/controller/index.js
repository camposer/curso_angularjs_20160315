'use strict';

(function() {

	angular
		.module('myApp.producto')
		.controller('myApp.producto.IndexCtrl', [ '$scope', 
			'myApp.producto.ProductoService', 
			IndexCtrl ]);

	function IndexCtrl($scope, productoService) {
		var init = function() {
			$scope.productos = productoService.obtenerProductos();
		};

		init();
	}

})();