 angular.module('inspinia').controller('dashboardCtrl',function($scope,utilService,visitanteService){


	$scope.statusAtual;
	$scope.pagAtual     = "";
	$scope.isVeiculo    = "N";
	$scope.visitante    = {};
	$scope.isCadastrar  = false;
	$scope.loadingBusca = false;
	$scope.statusFoto   = false;
    $scope.camera       = false;

    $scope.mostrarCamera = function(){
    	if($scope.webcamError){
    	    $scope.camera  = false;
    	}else{
    		$scope.camera  = true;	
    	}
    }


	$scope.novo = function(){
		$scope.pagAtual = "Cadastro administradores";
		$scope.statusAtual = true;
	}

	$scope.voltar = function(){
		$scope.pagAtual = "Adminstradores cadastrados";
		$scope.statusAtual = false;
	}

	$scope.iniciar = function(){
		$scope.pagAtual = "Adminstradores cadastrados";
	}

	$scope.limparCadastro = function(){
		$scope.visitante   = {};
		$scope.isCadastrar = false;
		$scope.camera      = false;
		$scope.apagar();
		$scope.cpf = '';
	}


	//cadastrar 

	$scope.cadastrar = function(){
		$scope.loadingBusca = true;
		visitanteService.cadastrarComImagem($scope.imagem,$scope.visitante)
		.success(function(data){
			
		
		})
		.error(function(erro){
			console.log(erro);
		})
		$scope.loadingBusca = false;
	}


	// Buscar por visitante cadastrado pelo cpf::
	$scope.buscarVisitante = function(cpf){
		$scope.loadingBusca = true;
		visitanteService.buscarPorCpf(cpf)
		.success(function(data){
			if(utilService.isVazio(data)){
				$scope.isCadastrar = true;
				$scope.visitante = {'cpf':cpf};
			}else{
			$scope.isCadastrar = true;
			$scope.visitante = data;
		}
		})
		.error(function(erro){
			console.log(erro);
		})
		$scope.loadingBusca = false;
	}




	//Abaixo configurações de cameras:

	 var _video = null,
        patData = null;

    $scope.patOpts = {x: 0, y: 0, w: 25, h: 25};

	$scope.channel = {};

	$scope.webcamError = false;
    $scope.onError = function (err) {
        $scope.$apply(
            function() {
                $scope.webcamError = err;
            }
        );
    };

    $scope.onSuccess = function () {
        // The video element contains the captured camera data
        _video = $scope.channel.video;
        $scope.$apply(function() {
            $scope.patOpts.w = _video.width;
            $scope.patOpts.h = _video.height;
            //$scope.showDemos = true;
        });
    };

    var stre = null;
    $scope.onStream = function (stream) {
        stre = stream;
    };

    $scope.pararWebcam = function(){
    var track = stre.getTracks()[0];  // if only one media track
    track.stop();
	}

    $scope.makeSnapshot = function() {
        if (_video) {
            var patCanvas = document.getElementById('snapshot');
            if (!patCanvas) return;

            patCanvas.width = $scope.patOpts.w;
            patCanvas.height = $scope.patOpts.h
            var ctxPat = patCanvas.getContext('2d');

            var idata = getVideoData($scope.patOpts.x, $scope.patOpts.y, $scope.patOpts.w, $scope.patOpts.h);
            ctxPat.putImageData(idata, 0, 0);

            sendSnapshotToServer(patCanvas.toDataURL());
         
            $scope.imagem = patCanvas.toDataURL(); //add something

		console.log($scope.visitante);
            patData = idata;
        }
    };

    var getVideoData = function getVideoData(x, y, w, h) {
        var hiddenCanvas = document.createElement('canvas');
        hiddenCanvas.width = _video.width;
        hiddenCanvas.height = _video.height;
        var ctx = hiddenCanvas.getContext('2d');
        ctx.drawImage(_video, 0, 0, _video.width, _video.height);
        return ctx.getImageData(x, y, w, h);
    };

    var sendSnapshotToServer = function sendSnapshotToServer(imgBase64) {
        if(!utilService.isVazio(imgBase64)){
        	$scope.statusFoto = true;
        }
    };

    $scope.apagar = function(){
    	 var hiddenCanvas = document.getElementById('snapshot');
        var ctx = hiddenCanvas.getContext('2d');
        ctx.clearRect(0, 0, hiddenCanvas.width, hiddenCanvas.height);
        $scope.statusFoto = false;
        $scope.visitante.imagem = {};
    }

 })