define([
	'angular-amd',
	'angular-route'
	], function (angularAMD) {
    var app = angular.module("app", ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider.when("/home", angularAMD.route({
            templateUrl: 'home/home.html',
            controller: 'HomeController',
            controllerUrl: 'home/home'
        }))
    });
    return angularAMD.bootstrap(app);
});