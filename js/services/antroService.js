app.factory('antroService', ['$http', function($http) {

 	return {
		getAntros: function(data) {
		 	$http.get('js/antros.json').success(data);
		}
	}
 }]);