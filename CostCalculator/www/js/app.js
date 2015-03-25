angular.module('FreeInvoice', ['ionic']).run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
        
    });
}).config(function($stateProvider, $urlRouterProvider,$httpProvider) {
    
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    
    
    $stateProvider.state('Splash', {
        url : '/Splash',
        templateUrl : 'templates/splash.html'
    }).state('Home', {
        url : '/Home',
        templateUrl : 'templates/home.html'
    }).state('NextPage', {
        url : '/NextPage',
        templateUrl : 'templates/NextPage.html'
    });

    $urlRouterProvider.otherwise('/Splash');

});
