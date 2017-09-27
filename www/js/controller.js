angular.module('starter')
.controller('ListagemController', function($scope) {
    $scope.listaDeCarros = ['BMW 120i', 'Onix 1.6', 'Fiesta 2.0', 'C3 1.0', 'Uno Fire', 'Sentra 2.0', 'Vectra 2.0 Turbo', 'Hilux 4X4', 'Montana Cabine Dupla', 'Outlander 2.4','Fusca 1500'];
    $scope.dataAtual = "01/01/2016";
});
angular.module('starter').controller('CarroEscolhidoController', function($scope, $stateParams) {
	
	$scope.carroEscolhido = $stateParams.carro;
	
});