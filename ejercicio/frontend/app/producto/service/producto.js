'use strict';

(function() {

	angular
		.module('myApp.producto')
		.service('myApp.producto.ProductoService', [
				'$http',
				'BASE_URL',
				ProductoService
			]);

	function ProductoService($http, BASE_URL) {

		this.obtenerProductos = function(success, error) {
			$http({
				method: 'get',
				url: BASE_URL + '/productos',
			}).then(success, error);
		};

		this.agregarProducto = function(producto, success, error) {
			$http({
				method: 'post',
				url: BASE_URL + '/productos',
				data: producto
			}).then(success, error);
		};

		this.modificarProducto = function(producto, success, error) {
			$http({
				method: 'put',
				url: BASE_URL + '/productos/' + producto.id,
				data: producto
			}).then(success, error);
		};

		this.eliminarProducto = function(id, success, error) {
			$http({
				method: 'delete',
				url: BASE_URL + '/productos/' + id
			}).then(success, error);
		};

		this.obtenerProducto = function(id, success, error) {
			$http({
				method: 'get',
				url: BASE_URL + '/productos/' + id
			}).then(success, error);
		};		

	}

})();