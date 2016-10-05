 angular.module('inspinia').controller('configuracaoCtrl',function($scope,toaster,utilService,condominioService,administradorService){


    var toast = toaster;
    $scope.configuracao = {};
    $scope.administrador = {};
    $scope.lista = [];
    $scope.administradores = [];
    $scope.tela = true;
	
	$scope.iniciar = function(){
	$scope.pagAtual = "Cadastro condomínio";
	$scope.listar();	
	}





    $scope.cadastroAdministrador = function(statusInvalido){
    	if(statusInvalido){
			utilService.msg("info","Atenção","Cadastro não realizado, Atenção para os campos obrigatórios (*)",toast );
		}else{
		$scope.administrador.condominio = $scope.configuracao;
		administradorService.cadastro($scope.administrador)
		.success(function(data){
			utilService.msg("success","Cadastro","Cadastro realizado com sucesso!",toast );
			$scope.administrador = data;
		}).error(function(erro){
			utilService.msg("error","Erro","Houve um erro ao tentar cadastrar administrador",toast );
		});
	}
	}

	$scope.administradores = function(condominio){
		$scope.tela = false;
		$scope.configuracao = condominio;
	}

	$scope.administradoresVoltar = function(){
		$scope.tela = true;
		$scope.configuracao = {};
	}


	$scope.tipoAcao = function(){
		if(utilService.isVazio($scope.configuracao.id)){
				return true;
		}
		return false;
	}


	$scope.cadastro = function(statusInvalido){
		if(statusInvalido){
			utilService.msg("info","Atenção","Cadastro não realizado, Atenção para os campos obrigatórios (*)",toast );
		}else{
			if(utilService.isVazio($scope.configuracao.id)){
				$scope.configuracao.ativo = 'S';
			condominioService.cadastro($scope.configuracao)
				.success(function(data){
					utilService.msg("success","Cadastro","Cadastro realizado com sucesso!",toast );
					$scope.configuracao = {};
					$scope.listar();
				})
				.error(function(err){
					utilService.msg("error","Erro","Houve um erro ao tentar cadastrar condomínio",toast );
				})
				}else{
				condominioService.alterar($scope.configuracao)
				.success(function(data){
					utilService.msg("success","Alteração","Alteração realizado com sucesso!",toast );
					$scope.listar();
				})
				.error(function(err){
					utilService.msg("error","Erro","Houve um erro ao tentar alterar condomínio",toast );
				})
			}				
			}
	}

			$scope.editar = function(id){
				$scope.obterPorId(id);
				$scope.tela = true;
			}

			$scope.limpar = function(id){
				$scope.configuracao = {};
			}

			$scope.ativar = function(id){
				condominioService.condominioPorId(id)
				.success(function(data){
					data.ativo = 'S';
					condominioService.alterar(data)
				.success(function(data){
					utilService.msg("info","Ativação","Condomínio ativado",toast );
					$scope.listar();
				})
				.error(function(err){
					utilService.msg("error","Erro","Houve um erro ao tentar ativar condomínio",toast );
				})
					
				})
				.error(function(err){
					utilService.msg("error","Erro","Houve um erro ao verificar condomínio",toast );
				})	
			}

			$scope.desativar = function(id){
				condominioService.condominioPorId(id)
				.success(function(data){
					data.ativo = 'N';
					condominioService.alterar(data)
				.success(function(data){
					utilService.msg("info","Desativação","Condomínio desativado",toast );
					$scope.listar();
				})
				.error(function(err){
					utilService.msg("error","Erro","Houve um erro ao tentar desativar condomínio",toast );
				})
					
				})
				.error(function(err){
					utilService.msg("error","Erro","Houve um erro ao verificar condomínio",toast );
				})	
			}

			$scope.obterPorId = function(id){
			condominioService.condominioPorId(id)
				.success(function(data){
					$scope.configuracao = data;
				})
				.error(function(err){
					utilService.msg("error","Erro","Houve um erro ao tentar buscar condomínio",toast );
				})				
		
	}


	$scope.listar = function(){
			condominioService.listar()
				.success(function(data){
					$scope.lista = data;
				})
				.error(function(err){
					utilService.msg("error","Erro","Houve um erro ao tentar buscar condomínios",toast );
				})				
		
	}

	$scope.listarAdministradores = function(id){
			administradorService.buscaPorCondominio(id)
				.success(function(data){
					$scope.administradores = data;
				})
				.error(function(err){
					utilService.msg("error","Erro","Houve um erro ao tentar buscar administradores",toast );
				})				
		
	}	


	


 })