require.config({
    baseUrl: '',    
    paths: {
    	'angular': 'libs/angular/angular',
    	'angular-route': 'libs/angular-route/angular-route',
    	'angular-amd': 'libs/angular-amd/angularAMD',
        'angular-animate': 'libs/angular-animate/angular-animate.min',
        'angular-aria': 'libs/angular-aria/angular-aria.min',
        'angular-material': 'libs/angular-material/angular-material.min'
    },
    shim: {
    	'angular-route': {
    		deps: ['angular']
    	},
    	'angular-amd': {
    		deps: ['angular']
    	},
        'angular-animate': {
            deps: ['angular']
        },
        'angular-aria': {
            deps: ['angular']
        },
    	'angular-material': {
            deps: ['angular', 'angular-animate', 'angular-aria']
        }
    },
    deps: ['app']
});