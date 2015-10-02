define([
	'angular-amd',
	'angular-route',
    'angular-material'
	], function (angularAMD) {
    var app = angular.module("app", ['ngRoute', 'ngMaterial']);
    app.config(function ($routeProvider) {
        $routeProvider.when("/home", angularAMD.route({
            templateUrl: 'home/home.html',
            controller: 'HomeController',
            controllerUrl: 'home/home'
        }))
    });
    app.config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('pink', {
          'default': '400',
          'hue-1': '100',
          'hue-2': '600',
          'hue-3': 'A100'
        })
        .accentPalette('purple', {
          'default': '200'
        });
    });
    return angularAMD.bootstrap(app);
});