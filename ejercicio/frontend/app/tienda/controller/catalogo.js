(function() {
	angular
		.module('myApp.tienda')
		.controller('myApp.tienda.CatalogoCtrl', [
			'$scope',
			'$location',
			'myApp.tienda.CarritoService',
			'myApp.producto.ProductoService',
			CatalogoCtrl]);

	function CatalogoCtrl($scope, $location, carritoService, productoService) {
		var init = function() {
			productoService.obtenerProductos(function(resp) {
				$scope.productos = resp.data;
			});
		};

		init();

		$scope.agregar = function() {
			for (var i in $scope.productos) {
				var p = $scope.productos[i];

				if (angular.isNumber(p.cantidad) && 
						p.cantidad > 0)
					carritoService.agregarProducto(p);
			}

			if (carritoService.obtenerProductos().length > 0) {
				$location.path('/carrito');
			}

		};
	}

})();