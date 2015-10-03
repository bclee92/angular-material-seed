(function() {
    'use strict';
    define([
    	'angular-material'
    	], function () {
    		var aboutModule = angular.module('about', ['ngMaterial']);
    		aboutModule.controller('AboutCtrl', function(){
    			var self = this;
    			this.title = 'About Page';
    			this.message = 'This is About page';
    		}
    	)
    });
})();