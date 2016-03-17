'use strict';

(function() {

	angular
		.module('myApp.tienda')
		.service('myApp.tienda.CompraService', [
				'$http',
				'BASE_URL',
				CompraService
			]);

	function CompraService($http, BASE_URL) {

		this.comprar = function(p, success, error) {
			$http.post(BASE_URL + '/compras', p).then(success, error);
		};

	}

})();