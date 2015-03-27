angular.module('CostCalculator', ['ionic']).run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
 
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
        
    });
}).config(function($stateProvider, $urlRouterProvider,$httpProvider) {
    
    
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
