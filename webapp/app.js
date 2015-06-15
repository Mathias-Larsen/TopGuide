var app = angular.module('StarterApp', ['ngMaterial', 'ngRoute']).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('cyan')
        .accentPalette('teal');

});

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise('/welcome')

    $routeProvider
       .when('/welcome' , {
            templateUrl: 'views/welcome.html'
        })
        .when('/icons' , {
            templateUrl: 'views/icons.html'
        })
        .when('/buttons' , {
            templateUrl: 'views/buttons.html'
        })
        .when('/inputfields' , {
            templateUrl: 'views/inputfields.html'
        });

    $locationProvider.html5Mode({
        enable: true,
        requireBase: false
    });
});

app.controller('AppCtrl', ['$scope', '$mdSidenav', '$mdToast', '$location', function($scope, $mdSidenav, $mdToast, $location){
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
    $scope.openToast = function($event) {
        $mdToast.show($mdToast.simple().content('Hello, i am the roast toast!!'));
    };

    $scope.toggleNavigation = function(siteId) {
        $location.path('/' + siteId);
    }


}]);
