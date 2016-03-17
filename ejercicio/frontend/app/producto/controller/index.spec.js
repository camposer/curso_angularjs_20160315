'use strict';

describe('myApp.producto.IndexCtrl unit test', function () {
  var controller, 
    indexCtrl, 
    scope, 
    productoServiceDummy, 
    MensajesFactory;

  beforeEach(module('myApp'));

  beforeEach(inject(function ($controller, $rootScope, $injector) { 
    scope = $rootScope.$new();

    controller = $controller;
    MensajesFactory = $injector.get('myApp.comun.MensajesFactory');
    // En lugar de implementar un dummy de ProductoService, pudimos
    // inyectar el $httpBackend y dar respuesta (estática) a cada una de las peticiones
    // angular inyecta el $httpBackend en lugar del $http de forma automática
    productoServiceDummy = $injector.get('myApp.producto.ProductoServiceDummy');

    productoServiceDummy.agregarProducto({
        id: 1,
        nombre: 'uno',
        precio: 1
      });
    productoServiceDummy.agregarProducto({
        id: 2,
        nombre: 'dos',
        precio: 2
      });
    productoServiceDummy.agregarProducto({
        id: 3,
        nombre: 'tres',
        precio: 3
      });

    indexCtrl = $controller('myApp.producto.IndexCtrl', {
      $scope: scope,
      'myApp.producto.ProductoService': productoServiceDummy,
      'myApp.comun.MensajesFactory': MensajesFactory
    });

    scope.$digest(); // Obliga la actualización del scope a partir de las promesas pendientes por ejecución
  }));

  it('Cuando se inicia el controller entonces hay productos', function () {
    console.log('productos = ' + JSON.stringify(scope.productos));
    expect(scope.productos.length).toEqual(3);
  });

  it('Cuando se agrega un producto', function () {
    scope.producto = {
      nombre: 'nuevo',
      precio: 200
    };

    var numeroProductos = scope.productos.length;

    scope.guardar({
      nombre: { $invalid: false },
      precio: { $invalid: false }
    });

    scope.$digest();

    expect(scope.mensajes.success.length).toBeGreaterThan(0);
    expect(scope.producto).toEqual({});
    expect(scope.productos.length).toEqual(numeroProductos + 1);
  });

  it('Cuando se agrega un producto con nombre inválido se agrega un mensaje de error', function () {
    scope.producto = {
      nombre: 'nuevo',
      precio: 200
    };

    scope.guardar({
      nombre: { $invalid: true },
      precio: { $invalid: false }
    });

    scope.$digest();

    expect(scope.mensajes.error.length).toBeGreaterThan(0);
  });

  it('Cuando se modifica un producto', function () {
    var producto = {
      id: 1,
      nombre: 'nuevo',
      precio: 200
    };
    scope.producto = producto;

    var numeroProductos = scope.productos.length;

    scope.guardar({
      nombre: { $invalid: false },
      precio: { $invalid: false }
    });

    scope.$digest();

    expect(scope.mensajes.success.length).toBeGreaterThan(0);
    expect(scope.producto).toEqual({});
    expect(scope.productos.length).toEqual(numeroProductos);

    productoServiceDummy.obtenerProducto(1, function(resp) {
      expect(resp.data).toEqual(producto);
    });

    scope.$digest();
  });

  it('Cuando se elimina un producto', function () {
    var numeroProductos = scope.productos.length;

    scope.eliminar(1);

    scope.$digest();

    expect(scope.mensajes.success.length).toBeGreaterThan(0);
    expect(scope.productos.length).toEqual(numeroProductos - 1);

  });

  it('Cuando se elimina un producto', function () {
    var numeroProductos = scope.productos.length;

    scope.mostrar(1);

    scope.$digest();

    expect(scope.producto).toEqual(scope.productos[0]);

  });

});
