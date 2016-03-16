'use strict';

(function() {

	angular
		.module('myApp.producto')
		.controller('myApp.producto.IndexCtrl', [ '$scope', 
			'myApp.producto.ProductoService', 
			IndexCtrl ]);

	function IndexCtrl($scope, productoService) {
		var listarProductos = function() {
			var success = function(resp) {
				$scope.productos = resp.data;
			};

			productoService.obtenerProductos(success);
		};

		var init = function() {
			listarProductos();
		};

		init();

		$scope.guardar = function(form) {
			$scope.mensajes = {
				success: [],
				error: []
			};

			if (form.nombre.$invalid)
				$scope.mensajes.error.push('Nombre inválido (debe tener al menos 3 caracteres)');

			if (form.precio.$invalid || $scope.producto.precio <= 0)
				$scope.mensajes.error.push('Precio inválido (debe ser un número mayor a 0)')			

			if ($scope.mensajes.error.length == 0) {
				var success = function() {
					$scope.mensajes.success.push('Producto agregado satisfactoriamente');
					listarProductos();
				};

				var error = function(resp) {
					var msg = (resp) ? ' - ' + resp.data : '';
					$scope.mensajes.error.push('Error al agregar el producto' + msg);
				}


				productoService.agregarProducto($scope.producto, success, error);
			}
		};
	}

})();