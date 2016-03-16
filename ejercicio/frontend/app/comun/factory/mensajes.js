(function() {
	angular
		.module('myApp')
		.factory('myApp.comun.MensajesFactory', MensajesFactory);

	function MensajesFactory() {
		return {
			createMensajes: function() {
				return {
					error: [],
					success: []
				};
			}
		};
	}

})();