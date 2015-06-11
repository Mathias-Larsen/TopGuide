var app = angular.module('StarterApp', ['ngMaterial', 'ui.router']).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('cyan')
        .accentPalette('red');

});

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/welcome");

    $stateProvider
        .state('welcome', {
            url: "/welcome",
            templateUrl: "views/welcome.html"
        })
        .state('icons', {
            url: "/icons",
            templateUrl: "views/icons.html"
        })
        .state('buttons', {
            url: "/buttons",
            templateUrl: "views/buttons.html"
        })
        .state('inputfields', {
            url: "/inputfields",
            templateUrl: "views/inputfields.html"
        });

});

app.controller('AppCtrl', ['$scope', '$mdSidenav', '$mdToast', function($scope, $mdSidenav, $mdToast){
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
    $scope.openToast = function($event) {
        $mdToast.show($mdToast.simple().content('Hello, i am the roast toast!!'));
    };

}]);
