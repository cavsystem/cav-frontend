 angular.module('inspinia').service('scriptService',function($http){


var vm = this;

vm.cadastro = function(script){
return $http.post("http://localhost:8080/script/",script);
}

vm.comando = function(script){
return $http.post("http://localhost:8080/script/comando",script);
}

vm.cadastrarScript = function(arquivo){		
			var formData = new FormData();
			formData.append('file',arquivo[0]);	
			return $http.post("http://localhost:8080/script/upload",  formData, {     
			    headers: { 'Content-Type': undefined},
			    transformRequest: angular.identity			    
			});
			}


 })