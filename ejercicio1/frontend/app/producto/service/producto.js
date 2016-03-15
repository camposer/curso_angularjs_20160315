'use strict';

(function() {

	angular
		.module('myApp.producto')
		.service('myApp.producto.ProductoService', 
			ProductoService);

	function ProductoService() {

		this.obtenerProductos = function() {
			return [
			{
				nombre: 'TV',
				precio: 200
			},
			{
				nombre: 'Cámara',
				precio: 300
			},
			{
				nombre: 'DVD',
				precio: 100
			}];
		};

	}

})();