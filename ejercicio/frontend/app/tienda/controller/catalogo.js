(function() {
	angular
		.module('myApp.tienda')
		.controller('myApp.tienda.CatalogoCtrl', [
			'$scope',
			'$sessionStorage',
			'myApp.producto.ProductoService',
			CatalogoCtrl]);

	function CatalogoCtrl($scope, $sessionStorage, productoService) {
		var init = function() {
			productoService.obtenerProductos(function(resp) {
				$scope.productos = resp.data;
			});
		};

		init();

		$scope.agregar = function() {
			var nuevosProductos = [];

			for (var i in $scope.productos) {
				var p = $scope.productos[i];

				if (angular.isNumber(p.cantidad) && 
						p.cantidad > 0)
					nuevosProductos.push(p);
			}

			// TODO Unir productos preexistentes con los nuevos
			$sessionStorage.productos = nuevosProductos;
		};
	}

})();