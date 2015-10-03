(function() {
    'use strict';
    define([
    	'angular-material'
    	], function () {
    		var aboutModule = angular.module('about', ['ngMaterial']);
    		aboutModule.controller('AboutCtrl', function(){
    			var self = this;
    			self.title = 'About Page';
    		}
    	)
    });
})();