 angular.module('inspinia').controller('administradorCtrl',function($scope ,utilService ,administradorService){


 	$scope.administrador = {};
 	$scope.administradores = [];
	$scope.statusAtual = false;
	$scope.pagAtual = "";




	$scope.cadastrar = function(){
		administradorService.cadastro($scope.administrador)
		.success(function(data){
			console.log(data);
		}).error(function(erro){

		});
	}

	$scope.excluir = function(id){
		administradorService.excluir(id)
		.success(function(data){
			console.log(data);
		}).error(function(erro){

		});
	}

	var listar = function(){
		administradorService.administradores()
		.success(function(data){
			$scope.administradores = data;
		}).error(function(erro){

		});
	}

	$scope.novo = function(){
		$scope.pagAtual = "Cadastro administradores";
		$scope.statusAtual = true;
	}

	$scope.voltar = function(){
		$scope.pagAtual = "Adminstradores cadastrados";
		$scope.statusAtual = false;
	}

	$scope.iniciar = function(){
		listar();
		$scope.pagAtual = "Adminstradores cadastrados";
	}

 })