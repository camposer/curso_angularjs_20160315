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

	}

})();