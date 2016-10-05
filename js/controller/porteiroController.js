 angular.module('inspinia').controller('porteiroCtrl',function($scope,utilService){


	$scope.statusAtual = false;
	$scope.isVeiculo = "N"
	$scope.pagAtual = "";

	$scope.novo = function(){
			$scope.pagAtual = "Cadastro de porteiro";
		$scope.statusAtual = true;
	}

	$scope.voltar = function(){
		$scope.pagAtual = "Porteiros cadastrados";
		$scope.statusAtual = false;
	}

	$scope.iniciar = function(){
		$scope.pagAtual = "Porteiros cadastrados";
	}
 })