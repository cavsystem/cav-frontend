 angular.module('inspinia').controller('maquinaAWSCtrl',function($scope,$uibModal,maquinaAWSService,toaster,credenciaisService,utilService){


$scope.maquina              = {};
$scope.maquinaSelecionada   = [];
$scope.listaInstancias      = [];
$scope.tipoEndPonits        = [];
$scope.listaGrupos          = [];
$scope.credenciais          = [];
$scope.keys                 = [];
$scope.retorna = false;
$scope.statusPasso2 = false;
var gruposConfiguracao;
var idAcesso = 0;
var endPoint = '';
var regiao = '';
var toast = toaster;

$scope.portas = [{}];

 $scope.adicionarPorta = function(){
	$scope.portas.push({protocol:'',FromPort:0,ToPort:0,IpRange:''});
 }


 $scope.removerPorta = function(){
 	$scope.portas.pop();
 }

$scope.selecionar = function(item){
	$scope.maquinaSelecionada = item.portas;
}

$scope.change = function(){
if($scope.maquina.tipoInstancia && $scope.maquina.regiao && $scope.maquina.credencial){
	 $scope.statusPasso2 = true;	 
	 listaGrupos($scope.maquina.credencial,"ec2."+$scope.maquina.regiao+".amazonaws.com",$scope.maquina.regiao)
	 listaKeys($scope.maquina.credencial,"ec2."+$scope.maquina.regiao+".amazonaws.com",$scope.maquina.regiao);

	 var idAcesso = $scope.maquina.credencial;
     var endPoint = "ec2."+$scope.maquina.regiao+".amazonaws.com";
     var regiao = $scope.maquina.regiao;
}
}

$scope.openCriar = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/modalCadastroGrupo.html',
            controller: function($scope, $uibModalInstance) {

        $scope.grupo = {};
        $scope.criarGrupo = function(portas){
        	$scope.grupo.portas = portas;
        	$scope.grupo.conexao = {idAcesso: idAcesso,endPoint: endPoint,Regiao:regiao};
			maquinaAWSService.cadastroGrupo($scope.grupo)
			.success(function(data){
				listaGrupos();
				$scope.cancel();
				utilService.msg("success","Cadastro","Cadastro de grupo realizado com sucesso!!!",toast );
				
			})
			.error(function(erro){
				console.log(erro);
			});  

		}

        $scope.cancel = function () {          
            $uibModalInstance.dismiss('cancel');
        };
    },
        });
    };

    $scope.openConfig = function (size) {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/modalConfiguracaoGrupo.html',
            size: size,
            controller: function($scope, $uibModalInstance) {
            $scope.grupos = gruposConfiguracao;
        $scope.ok = function () {
           
        };
        $scope.cancel = function () {          
            $uibModalInstance.dismiss('cancel');
        };
    },
        });
    };

  

$scope.inicializar = function(){
	listaInstancias();
	listatipoEndPonit();
	listaCredeciais();
}

var listaInstancias = function () {
	 maquinaAWSService.tipoInstacia()
.success(function(data){
	$scope.listaInstancias = data;
})
.error(function(erro){
	console.log(erro);
});  
}
 
 var listatipoEndPonit = function () {
	 maquinaAWSService.tipoEndPonit()
.success(function(data){
	$scope.tipoEndPonits = data;
})
.error(function(erro){
	console.log(erro);
});  
} 


var listaGrupos = function (id,endPoint,regiao) {
	 maquinaAWSService.listaGrupos(id,endPoint,regiao)
.success(function(data){
	$scope.listaGrupos = data;
	gruposConfiguracao = data;
})
.error(function(erro){
	console.log(erro);
});  
} 

var listaKeys = function (id,endPoint,regiao) {
	 maquinaAWSService.listaKeys(id,endPoint,regiao)
.success(function(data){
	$scope.keys = data;
	$scope.statusPasso2 = false;
	$scope.retorna  = true;
})
.error(function(erro){
	console.log(erro);
});  
} 

var listaCredeciais = function () {
	 credenciaisService.credenciais()
.success(function(data){
	$scope.credenciais = data;
})
.error(function(erro){
	console.log(erro);
});  
} 


$scope.cadastro = function(){
  scriptService.comando($scope.script)
.success(function(data){
	console.log(data);
})
.error(function(erro){
	console.log(erro);
});

}


 });