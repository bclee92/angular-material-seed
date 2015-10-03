(function() {
    'use strict';
    define([
    	'angular-material'
    	], function () {
    		var homeModule = angular.module('home', ['ngMaterial']);
    		homeModule.controller('HomeCtrl', function(){
    			this.title = 'Home Page';
                this.message = 'This is Home page';
    		}
    	)
    });
})();