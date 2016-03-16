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
			$scope.mensajes = [];

			if (form.nombre.$invalid)
				$scope.mensajes.push('Nombre inválido (debe tener al menos 3 caracteres)');

			if (form.precio.$invalid || $scope.producto.precio <= 0)
				$scope.mensajes.push('Precio inválido (debe ser un número mayor a 0)')			

			if ($scope.mensajes.length == 0) {
				window.alert("Todo bien!");
			}
		};
	}

})();