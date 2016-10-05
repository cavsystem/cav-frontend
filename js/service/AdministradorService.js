 angular.module('inspinia').service('administradorService',function($http){


var vm = this;

vm.cadastro = function(dados){
return $http.post("http://localhost:8080/administrador/",dados);
}

vm.administradores = function(){
return $http.get("http://localhost:8080/administrador");
}

vm.buscaPorCondominio = function(id){
	return $http.get("http://localhost:8080/buscaPorCondominio/"+id);
}

vm.excluir = function(id){
return $http.delete("http://localhost:8080/administrador/"+id);
}


 })