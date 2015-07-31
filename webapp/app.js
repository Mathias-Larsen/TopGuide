var app = angular.module('StarterApp', ['ngMaterial', 'ngRoute', 'ngCookies'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('cyan')
            .primaryPalette('cyan')
            .accentPalette('light-blue');
        $mdThemingProvider.theme('altTheme')
            .primaryPalette('deep-purple')
            .accentPalette('purple');
        $mdThemingProvider.theme('green')
            .primaryPalette('teal')
            .accentPalette('blue-grey');
        $mdThemingProvider.definePalette('autumn', {
            '50': '004A61',
            '100': '004A61',
            '200': '004A61',
            '300': '004A61',
            '400': '004A61',
            '500': '004A61',
            '600': '004A61',
            '700': '004A61',
            '800': '004A61',
            '900': '004A61',
            'A100': '004A61',
            'A200': '004A61',
            'A400': '004A61',
            'A700': '004A61',
            'contrastDefaultColor': 'light'
        });

        $mdThemingProvider.definePalette('autumn1', {
            '50': 'B0B9E8',
            '100': 'B0B9E8',
            '200': 'B0B9E8',
            '300': 'B0B9E8',
            '400': 'B0B9E8',
            '500': 'B0B9E8',
            '600': 'B0B9E8',
            '700': 'B0B9E8',
            '800': 'B0B9E8',
            '900': 'B0B9E8',
            'A100': 'B0B9E8',
            'A200': 'B0B9E8',
            'A400': 'B0B9E8',
            'A700': 'B0B9E8',
            'contrastDefaultColor': 'light'
        });


        $mdThemingProvider.theme('default')
            .primaryPalette('autumn')
            .accentPalette('autumn1')
            .warnPalette('amber');

        $mdThemingProvider.setDefaultTheme('default');
        $mdThemingProvider.alwaysWatchTheme(true);
        // find a way to put a cookie to store the themek

    });

app.config(function($mdIconProvider) {
    $mdIconProvider.fontSet('fa', 'fontawesome');
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
        })
        .when('/themes', {
            templateUrl: 'views/dynamicThemes.html'
        });


    $locationProvider.html5Mode({
        enable: true,
        requireBase: false
    });
});

//Toast function
app.controller('AppCtrl', ['$scope', '$mdSidenav', '$mdToast', '$location', '$cookies', function($scope, $mdSidenav, $mdToast, $location, $cookies){
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };

    $scope.openToast = function($event) {
        $mdToast.show($mdToast.simple().content('Message sent'));
    };

    $scope.openRoastToast = function($event, message) {
        $mdToast.show($mdToast.simple().content(message))
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

    $scope.dynamicTheme = $cookies.get('colorTheme');

    $scope.toggleDynamicTheme = function(theme) {
        $scope.dynamicTheme = theme;
        $cookies.put('colorTheme', theme)
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