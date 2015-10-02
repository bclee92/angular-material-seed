()
require.config({
    baseUrl: '',    
    paths: {
    	'angular': 'node_modules/angular/angular',
    	'angular-route': 'node_modules/angular-route/angular-route',
    	'angular-amd': 'app/libs/angular-amd/angularAMD'
    },
    shim: {
    	'angular': {
    		exports: ['angular']
    	}
    	'angular-route': {
    		deps: ['angular']
    	},
    	'angular-amd': {
    		deps: ['angular']
    	}
    	
    },
    deps: ['app']
});