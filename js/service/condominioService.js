 angular.module('inspinia').service('condominioService',function($http,utilService){


var vm = this;

var URL_CONDOMINIO = "http://localhost:8080/condominio"

vm.cadastro = function(dados){
return $http.post(URL_CONDOMINIO,dados);
}

vm.alterar = function(dados){
return $http.put(URL_CONDOMINIO,dados);
}

vm.listar = function(){
return $http.get(URL_CONDOMINIO+"/");
}

vm.condominioPorId = function(par){
return $http.get(URL_CONDOMINIO+"/"+par);
}



 })