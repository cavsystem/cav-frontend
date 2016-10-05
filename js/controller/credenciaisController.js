 angular.module('inspinia').controller('credenciaisCtrl',function($scope,toaster,utilService,credenciaisService){


$scope.credenciais = [];
$scope.credencial = {};

$scope.inicializar = function(){
 	listaCredenciais();
}


var listaCredenciais = function () {
	 credenciaisService.credenciais()
.success(function(data){
	$scope.credenciais = data;
})
.error(function(erro){
	utilService.msg('error','Houve um erro','Erro ao tentar listar crendeciais',toaster);
});  
}
 


$scope.cadastro = function(){
  credenciaisService.cadastro($scope.credencial)
.success(function(data){
		utilService.msg('success','Sucesso','cadastro realizado com sucesso!!!',toaster);
		listaCredenciais();
		$scope.credencial = {};
})
.error(function(erro){
		utilService.msg('error','Houve um erro','Erro ao tentar cadastrar crendeciais',toaster);

});

}


 })