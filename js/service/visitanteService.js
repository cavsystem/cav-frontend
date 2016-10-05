 angular.module('inspinia').service('visitanteService',function($http,utilService){


var vm = this;

var URL_IMAGEM_VISITANTE = "http://localhost:8080/imagemVisitante";
var URL_VISITANTE = "http://localhost:8080/visitante"

vm.cadastro = function(dados){
return $http.post(URL_VISITANTE,dados);
}

vm.buscarPorCpf = function(cpf){
return $http.get(URL_VISITANTE+"/buscaPorCpf/"+cpf);
}

vm.buscarPorCpfImagemVisitante = function(cpf){
return $http.get(URL_IMAGEM_VISITANTE+"/buscaPorCpf/"+cpf);
}

vm.cadastrarComImagem = function(arquivo,dados){
			function getBase64Image(base64string) {
    return base64string.replace(/^data:image\/(png|jpg);base64,/, "");
}
var imgData = JSON.stringify(getBase64Image(arquivo));

dados.imagem = [{base64:imgData}];
	
			return $http.post(URL_VISITANTE+"/cadastroComImagem", dados);
			}


 })