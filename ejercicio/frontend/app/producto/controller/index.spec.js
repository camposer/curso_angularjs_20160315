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
      MensajesFactory: MensajesFactory
    });

    scope.$digest(); // Obliga la actualización del scope a partir de las promesas pendientes por ejecución
  }));

  it('Cuando se inicia el controller entonces hay productos', function () {
    console.log('productos = ' + JSON.stringify(scope.productos));
    expect(scope.productos.length).toEqual(3);
  });

});
