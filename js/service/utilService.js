 angular.module('inspinia').service('utilService',function($http){


var vm = this;



vm.msg = function(tipo,titulo,texto,toaster){

toaster.pop({
            type: tipo,
            title: titulo,
            body: texto,
            progressBar: true,
            showCloseButton: true,
            timeout: 5000
        });

}


 vm.isVazio = function (parDado) {
                        if (angular.isObject(parDado)) {
                            if (jQuery.isEmptyObject(parDado)) {
                                return true;
                            }
                        }
                        if (angular.isArray(parDado)) {
                            if (parDado.length === 0) {
                                return true;
                            }
                        }
                        if (parDado === '' || parDado === undefined || parDado === null) {
                            return true;
                        }
                        return false;
                    };


});