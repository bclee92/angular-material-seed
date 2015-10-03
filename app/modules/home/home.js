(function() {
    'use strict';
    define([
    	'angular-material'
    	], function () {
    		var homeModule = angular.module('home', ['ngMaterial']);
    		homeModule.controller('HomeCtrl', function(){
                var self = this;
    			self.title = 'Home Page';
    		}
    	)
    });
})();