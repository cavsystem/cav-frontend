 angular.module('inspinia').service('credenciaisService',function($http){


var vm = this;

vm.cadastro = function(dados){
return $http.post("http://localhost:8080/credencial/",dados);
}

vm.credenciais = function(){
return $http.get("http://localhost:8080/credencial/credenciais");
}


 })