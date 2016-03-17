'use strict';

(function() {
	angular
		.module('myApp.producto')
		.service('myApp.producto.ProductoServiceDummy', [ '$q', ProductoServiceDummy ]);

	function ProductoServiceDummy($q) {
		var productos = [];
		var contador = 1;

		this.obtenerProductos = function(success, error) {
			var deferred = $q.defer();

			deferred.resolve({
	        	data: productos
	        });

			deferred.promise.then(success, error);

	        // success({data: productos});
		};

		this.agregarProducto = function(producto, success, error) {
			producto.id = contador++;
			productos.push(producto);

	        $q(function(resolve, reject) {
	        	resolve();
	        }).then(success, error);
		};

		this.modificarProducto = function(producto, success, error) {
			var pos = buscarPos(producto.id);

			if (pos)
				productos[pos] = producto;

	        $q(function(resolve, reject) {
	        	if (pos)
	        		resolve();
	        	else
	        		reject();
	        }).then(success, error);
		};

		this.eliminarProducto = function(id, success, error) {
			var pos = buscarPos(id);
			if (pos)
				productos.splice(pos, 1);

	        $q(function(resolve) {
	        	resolve();
	        }).then(success, error);
		}

		this.obtenerProducto = function(id, success, error) {
			$q(function(resolve, reject) {
				var pos = buscarPos(id);
				if (pos)
					resolve({
						data: productos[pos]
					});
				else
	        		resolve();
	        }).then(success, error);
		}

		var buscarPos = function(id) {
			for (var i in productos)
				if (productos[i].id == id)
					return i;
		}
	}
})();
