(function() {
	angular
		.module('myApp.tienda')
		.service('myApp.tienda.CarritoService', [ 
			'$sessionStorage',
			CarritoService]);

	function CarritoService($sessionStorage) {
		this.agregarProducto = function(producto) {
			var conseguido = false;

			if ($sessionStorage.productos) {

				for (var i in $sessionStorage.productos) {
					if ($sessionStorage.productos[i].id == producto.id) {
						$sessionStorage.productos[i].cantidad += producto.cantidad;
						conseguido = true;
						break;
					}
				}

			} else {
				$sessionStorage.productos = [];
			}

			if (!conseguido) {
				$sessionStorage.productos.push(producto);
			}
		};

		this.obtenerProductos = function() {
			return ($sessionStorage.productos) ? $sessionStorage.productos : [];
		};

		this.limpiar = function() {
			$sessionStorage.productos = [];
		}
	}

})();