 angular.module('inspinia').controller('scriptCtrl',function($scope,scriptService){


$scope.script = {};


$scope.fileNameChanged = function (ele) {
	 scriptService.cadastrarScript(ele)
.success(function(data){
	console.log(data);
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


 })