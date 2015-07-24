var app = angular.module('StarterApp', ['ngMaterial', 'ngRoute'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('cyan')
            .accentPalette('light-blue');
    });

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise('/welcome');

    $routeProvider
        .when('/welcome', {
            templateUrl: 'views/welcome.html'
        })
        .when('/icons', {
            templateUrl: 'views/icons.html'
        })
        .when('/buttons', {
            templateUrl: 'views/buttons.html'
        })
        .when('/inputfields', {
            templateUrl: 'views/inputfields.html'
        })
        .when('/progress', {
            templateUrl: 'views/progress.html'
        })
        .when('/Toolbar', {
            templateUrl: 'views/Toolbar.html'
        })
        .when('/links', {
            templateUrl: 'views/links.html'
        })
        .when('/checkbox', {
            templateUrl: 'views/checkbox.html'
        })
        .when('/colors', {
            templateUrl: 'views/colors.html'
        })
        .when('/dropdown', {
            templateUrl: 'views/dropdown.html'
        })
        .when('/tooltip', {
            templateUrl: 'views/tooltip.html'
        })
        .when('/examples', {
            templateUrl: 'views/examples.html'
        })
        .when('/gettingstarted', {
            templateUrl: 'views/gettingstarted.html'
        })
        .when('/output', {
            templateUrl: 'views/output.html'
        })
        .when('/tryout', {
            templateUrl: 'views/tryout.html'
        })
        .when('/cards', {
            templateUrl: 'views/cards.html'
        })
        .when('/typo', {
            templateUrl: 'views/typo.html'
        })
        .when('/toast', {
            templateUrl: 'views/toast.html'
        });


    $locationProvider.html5Mode({
        enable: true,
        requireBase: false
    });
});

//Toast function

app.controller('AppCtrl', ['$scope', '$mdSidenav', '$mdToast', '$location', function($scope, $mdSidenav, $mdToast, $location){
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };

    $scope.openToast = function($event) {
        $mdToast.show($mdToast.simple().content('Message sent'));
    };

    $scope.toggleNavigation = function(siteId) {
        $location.path('/' + siteId);
    };

    //For input fields
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

//Chips
(function () {
    'use strict';
    angular
        .module('chipsDemo', ['ngMaterial'])
        .controller('BasicDemoCtrl', DemoCtrl);
    function DemoCtrl ($timeout, $q) {
        var self = this;
        self.readonly = false;
        // Lists of fruit names and Vegetable objects
        self.fruitNames = ['Apple', 'Banana', 'Orange'];
        self.roFruitNames = angular.copy(self.fruitNames);
        self.tags = [];
        self.vegObjs = [
            {
                'name' : 'Broccoli',
                'type' : 'Brassica'
            },
            {
                'name' : 'Cabbage',
                'type' : 'Brassica'
            },
            {
                'name' : 'Carrot',
                'type' : 'Umbelliferous'
            }
        ];
        self.newVeg = function(chip) {
            return {
                name: chip,
                type: 'unknown'
            };
        };
    }
})();
//Chips stop

// Whiteframes as output fields
angular.module('whiteframeBasicUsage', ['ngMaterial']);

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