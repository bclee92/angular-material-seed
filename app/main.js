require.config({
    baseUrl: '',    
    paths: {
    	'angular': 'libs/angular/angular',
    	'angular-amd': 'libs/angular-amd/angularAMD',
        'angular-animate': 'libs/angular-animate/angular-animate.min',
        'angular-aria': 'libs/angular-aria/angular-aria.min',
        'angular-material': 'libs/angular-material/angular-material.min',
        'angular-ui-router': 'libs/angular-ui-router/angular-ui-router.min',

        'home': 'modules/home/home',
        'about': 'modules/about/about'
    },
    shim: {
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
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'home': {
            deps: ['angular-material']
        }
    },
    deps: ['app']
});