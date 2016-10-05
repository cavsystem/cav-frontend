 angular.module('inspinia').controller('moradorCtrl',function($scope,utilService){


	$scope.statusAtual = false;
	$scope.isVeiculo = "N"
	$scope.pagAtual = "";

	$scope.novo = function(){
			$scope.pagAtual = "Cadastro de morador";
		$scope.statusAtual = true;
	}

	$scope.voltar = function(){
		$scope.pagAtual = "Moradores cadastrados";
		$scope.statusAtual = false;
	}

	$scope.iniciar = function(){
		$scope.pagAtual = "Moradores cadastrados";
	}
 })