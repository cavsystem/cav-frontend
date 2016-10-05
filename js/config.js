/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/index/dashboard");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html",
        })
         .state('index.dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboard.html",
            data: { pageTitle: 'Dashboard' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            insertBefore: '#loadBefore',
                            name: 'webcam',
                            files: ['js/plugins/webcam/webcam.min.js']
                        }
                    ]);
                }
            }
        })
        .state('index.administrador', {
            url: "/administrador",
            templateUrl: "views/administrador.html",
            data: { pageTitle: 'Área do administrador' }
        })
        .state('index.configuracao', {
            url: "/configuracao",
            templateUrl: "views/configuracao.html",
            data: { pageTitle: 'Configurações do sistema' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            insertBefore: '#loadBefore',
                            name: 'toaster',
                            files: ['js/plugins/toastr/toastr.min.js', 'css/plugins/toastr/toastr.min.css']
                        },
                        {
                            files: ['js/plugins/moment/moment.min.js']
                        },
                        {
                            name: 'ui.knob',
                            files: ['js/plugins/jsKnob/jquery.knob.js','js/plugins/jsKnob/angular-knob.js']
                        },
                      {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            name: 'nouislider',
                            files: ['css/plugins/nouslider/jquery.nouislider.css','js/plugins/nouslider/jquery.nouislider.min.js','js/plugins/nouslider/angular-nouislider.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css','js/plugins/datapicker/angular-datepicker.js']
                        },
                        {
                            files: ['js/plugins/jasny/jasny-bootstrap.min.js']
                        },
                       {
                            name: 'ui.switchery',
                            files: ['css/plugins/switchery/switchery.css','js/plugins/switchery/switchery.js','js/plugins/switchery/ng-switchery.js']
                        },
                        {
                            files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        },
                        {
                            name: 'ui.select',
                            files: ['js/plugins/ui-select/select.min.js', 'css/plugins/ui-select/select.min.css']
                        },
                        {
                            files: ['css/plugins/touchspin/jquery.bootstrap-touchspin.min.css', 'js/plugins/touchspin/jquery.bootstrap-touchspin.min.js']
                        }
                    ]);
                }
            }
        })  
        .state('index.apartamento', {
            url: "/apartamento",
            templateUrl: "views/apartamento.html",
            data: { pageTitle: 'Criar apartamento' }
        }) 
        .state('index.morador', {
            url: "/morador",
            templateUrl: "views/morador.html",
            data: { pageTitle: 'Criar Cadastro de Morador' }
        }) 
        .state('index.porteiro', {
            url: "/porteiro",
            templateUrl: "views/porteiro.html",
            data: { pageTitle: 'Criar de porteiro' }
        })
        .state('index.ocorrencia', {
            url: "/ocorrencia",
            templateUrl: "views/ocorrencia.html",
            data: { pageTitle: 'Criar de ocorrência' }
        })
        .state('index.correspondencia', {
            url: "/correspondencia",
            templateUrl: "views/correspondencia.html",
            data: { pageTitle: 'Cadastar correspondencia' }
        }) 
        .state('index.criarMaquina', {
            url: "/criarMaquina",
            templateUrl: "views/criarMaquina.html",
            data: { pageTitle: 'Criar maquina virtual' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            insertBefore: '#loadBefore',
                            name: 'toaster',
                            files: ['js/plugins/toastr/toastr.min.js', 'css/plugins/toastr/toastr.min.css']
                        }
                    ]);
                }
            }
        })
         .state('index.criarCredencial', {
            url: "/criarCredencial",
            templateUrl: "views/criarCredencial.html",
            data: { pageTitle: 'Criar credencial aws' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            insertBefore: '#loadBefore',
                            name: 'toaster',
                            files: ['js/plugins/toastr/toastr.min.js', 'css/plugins/toastr/toastr.min.css']
                        }
                    ]);
                }
            }
        })  
        .state('index.script', {
            url: "/script",
            templateUrl: "views/criarScript.html",
            data: { pageTitle: 'Criação de scripts' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'summernote',
                            files: ['css/plugins/summernote/summernote.css','css/plugins/summernote/summernote-bs3.css','js/plugins/summernote/summernote.min.js','js/plugins/summernote/angular-summernote.min.js']
                        }
                    ]);
                }
            }
        })
}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
