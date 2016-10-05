 angular.module('inspinia').controller('apartamentoCtrl',function($scope,utilService){


	$scope.statusAtual = false;
	$scope.pagAtual = "";

	$scope.novo = function(){
			$scope.pagAtual = "Cadastro de apartamento";
		$scope.statusAtual = true;
	}

	$scope.voltar = function(){
		$scope.pagAtual = "Apartamentos cadastrados";
		$scope.statusAtual = false;
	}

	$scope.iniciar = function(){
		$scope.pagAtual = "Apartamentos cadastrados";
	}
 })