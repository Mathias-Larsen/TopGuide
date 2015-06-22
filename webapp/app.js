var app = angular.module('StarterApp', ['ngMaterial', 'ngRoute']).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('cyan')
        .accentPalette('deep-purple');

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
        })
        .when('/progress' , {
            templateUrl: 'views/progress.html'
        })
        .when('/Toolbar' , {
            templateUrl: 'views/Toolbar.html'
        })
        .when('/links' , {
            templateUrl: 'views/links.html'
        })
        .when('/checkbox' , {
            templateUrl: 'views/checkbox.html'
        })
        .when('/colors' , {
            templateUrl: 'views/colors.html'
        })
        .when('/dropdown' , {
            templateUrl: 'views/dropdown.html'
        })
        .when('/tooltip' , {
            templateUrl: 'views/tooltip.html'
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
    };

    $scope.title1 = 'Button';
    $scope.title4 = 'Warn';
    $scope.isDisabled = true;
    $scope.googleUrl = 'http://google.com';

    $scope.user = {
        title: 'Developer',
        email: 'ipsum@lorem.com',
        firstName: '',
        lastName: '' ,
        company: 'Google' ,
        address: '1600 Amphitheatre Pkwy' ,
        city: 'Mountain View' ,
        state: 'CA' ,
        biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
        postalCode : '94043'
    };


}]);


app.directive('ngPrism', [function() {
    return {
        restrict: 'A',
        link: function($scope, element, attrs) {
            element.ready(function() {
                Prism.highlightElement(element[0]);
            });
        }
    }
}]);
