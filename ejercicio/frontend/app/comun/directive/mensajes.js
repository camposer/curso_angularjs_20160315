(function() {
	angular
		.module('myApp')
		.directive('appMensajes', AppMensajes);

	function AppMensajes() {
		return {
			templateUrl: 'comun/directive/mensajes/template.html'
		};
	}

})();