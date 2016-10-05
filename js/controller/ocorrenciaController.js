 angular.module('inspinia').controller('ocorrenciaCtrl',function($scope,utilService){


	$scope.statusAtual = false;
	$scope.isVeiculo = "N"
	$scope.pagAtual = "";

	$scope.novo = function(){
			$scope.pagAtual = "Cadastro de ocorrência";
		$scope.statusAtual = true;
	}

	$scope.voltar = function(){
		$scope.pagAtual = "Ocorrências cadastradas";
		$scope.statusAtual = false;
	}

	$scope.iniciar = function(){
		$scope.pagAtual = "Ocorrências cadastradas";
	}
 })