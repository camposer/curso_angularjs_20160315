'use strict';

(function() {

	angular
		.module('myApp.producto')
		.controller('myApp.producto.IndexCtrl', [ '$scope', 
			'myApp.producto.ProductoService', 
			'myApp.comun.MensajesFactory',
			IndexCtrl ]);

	function IndexCtrl($scope, productoService, MensajesFactory) {

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

//		$scope.mostrar = function(p) {
		$scope.mostrar = function(id) {
//			$scope.producto = p;

			var success = function(resp) {
				$scope.producto = resp.data;
			};

			productoService.obtenerProducto(id, success);
		};

		$scope.eliminar = function(id) {
			$scope.mensajes = MensajesFactory.createMensajes();

			var success = function() {
				$scope.mensajes.success.push('Producto eliminado satisfactoriamente');
				listarProductos();
			};

			var error = function() {
				$scope.mensajes.error.push('Ha ocurrido un error al eliminar el producto');
			};

			productoService.eliminarProducto(id, success, error);
		};

		$scope.guardar = function(form) {
			$scope.mensajes = MensajesFactory.createMensajes();

			if (form.nombre.$invalid)
				$scope.mensajes.error.push('Nombre inválido (debe tener al menos 3 caracteres)');

			if (form.precio.$invalid || $scope.producto.precio <= 0)
				$scope.mensajes.error.push('Precio inválido (debe ser un número mayor a 0)')			

			if ($scope.mensajes.error.length == 0) {
				var success = function() {
					$scope.mensajes.success.push('Producto guardado satisfactoriamente');
					$scope.producto = {};
					listarProductos();
				};

				var error = function(resp) {
					var msg = (resp) ? ' - ' + resp.data : '';
					$scope.mensajes.error.push('Error al agregar el producto' + msg);
				}

				if ($scope.producto.id) { // Modificar
					productoService.modificarProducto($scope.producto, success, error);					
				} else { // Agregar
					productoService.agregarProducto($scope.producto, success, error);					
				}
			}
		};
	}

})();