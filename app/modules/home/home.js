define([
	'app'
	], function (app) {
    app.controller('HomeController', function ($scope) {
        $scope.message = "Message from HomeCtrl"; 
    });
});