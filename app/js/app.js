angular.module('ragnode', [  'ngRoute', 'ngResource', 'ngAnimate', 'ngCookies', 'ngSanitize', 'ngTouch', 'ui.router', 'pascalprecht.translate', 'snap', 'angular-carousel', 'pasvaz.bindonce']);






angular.module('ragnode').config(function($stateProvider, $urlRouterProvider, $translateProvider) {

});


angular.module('ragnode').controller('mainController', function ($scope) {
    "use strict";

    $scope.message = "Yeahhh ! You're ready !";
});