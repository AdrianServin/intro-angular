app.controller('barCtrl', ['$scope', 'antroService', function ($scope, antroService) {
	$scope.antros = [];
    
    antroService.getAntros(function(result){
        $scope.antros = result;
    });
}])