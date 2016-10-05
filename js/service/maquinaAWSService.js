 angular.module('inspinia').service('maquinaAWSService',function($http){


var vm = this;

vm.cadastro = function(dados){
return $http.post("http://localhost:8080/script/",script);
}

vm.cadastroGrupo = function(dados){
return $http.post("http://localhost:8080/maquinaAWS/cadastroGrupo/",dados);
}

vm.tipoInstacia = function(){
return $http.get("http://localhost:8080/maquinaAWS/tiposInstancias");
}

vm.tipoEndPonit = function(){
return $http.get("http://localhost:8080/maquinaAWS/tiposEndPoints");
}

vm.listaGrupos = function(id,endPoint,regiao){
return $http.get("http://localhost:8080/maquinaAWS/listaGrupos/"+id+"/"+endPoint+"/"+regiao);
}

vm.listaKeys = function(id,endPoint,regiao){
return $http.get("http://localhost:8080/maquinaAWS/listaKeys/"+id+"/"+endPoint+"/"+regiao);
}





 })