(function() {
	angular
		.module('myApp')
		.directive('appMensajes', AppMensajes);

	function AppMensajes() {
		return {
			restrict: 'E',
			templateUrl: 'comun/directive/mensajes/template.html',
			scope: {
				mensajes: '=src'
			},
			controller: [ '$rootScope', function($rootScope) {
				console.log($rootScope);
			}]
		};
	}

})();