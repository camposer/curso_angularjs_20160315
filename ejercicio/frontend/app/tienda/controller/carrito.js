(function() {
	angular
		.module('myApp.tienda')
		.controller('myApp.tienda.CarritoCtrl', [
				'$scope',
				'myApp.tienda.CarritoService',
				'myApp.tienda.CompraService',
				CarritoCtrl
			]);
	
	function CarritoCtrl($scope, carritoService, compraService) {
		var init = function() {
			$scope.productos = carritoService.obtenerProductos();
		};

		init();

		$scope.obtenerTotal = function() {
			var total = 0;

			carritoService.obtenerProductos().map(function(p) {
				total += p.cantidad * p.precio;
			});

			return total;			
		};

		$scope.comprar = function() {
			carritoService.obtenerProductos().map(function(p) {
				compraService.comprar({
					productoId: p.id,
					nombre: p.nombre,
					cantidad: p.cantidad
				});
			});

			// TODO Añadir lógica para validar que todas las compras se han realizado satisfactoriamente
			carritoService.limpiar();
			init();
		};
	}

})();