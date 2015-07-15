var app = angular.module('StarterApp', ['ngMaterial', 'ngRoute']).config(function($mdThemingProvider) {
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
        .when('/heading', {
            templateUrl: 'views/heading.html'
        })
        .when('/toast', {
            templateUrl: 'views/toast.html'
        });


    $locationProvider.html5Mode({
        enable: true,
        requireBase: false
    });
});

angular.module('toastDemo1', ['ngMaterial'])
    .controller('AppCtrl', function($scope, $mdToast, $animate) {
        $scope.toastPosition = {
            bottom: false,
            top: true,
            left: false,
            right: true
        };
        $scope.getToastPosition = function() {
            return Object.keys($scope.toastPosition)
                .filter(function(pos) { return $scope.toastPosition[pos]; })
                .join(' ');
        };
        $scope.showCustomToast = function() {
            $mdToast.show({
                controller: 'ToastCtrl',
                templateUrl: 'toast-template.html',
                hideDelay: 6000,
                position: $scope.getToastPosition()
            });
        };
        $scope.showSimpleToast = function() {
            $mdToast.show(
                $mdToast.simple()
                    .content('Simple Toast!')
                    .position($scope.getToastPosition())
                    .hideDelay(3000)
            );
        };
        $scope.showActionToast = function() {
            var toast = $mdToast.simple()
                .content('Action Toast!')
                .action('OK')
                .highlightAction(false)
                .position($scope.getToastPosition());
            $mdToast.show(toast).then(function() {
                alert('You clicked \'OK\'.');
            });
        };
    })

    .controller('ToastCtrl', function($scope, $mdToast) {
        $scope.closeToast = function() {
            $mdToast.hide();
        };
    });

//app.controller('AppCtrl', ['$scope', '$mdSidenav', '$mdToast', '$location', function($scope, $mdSidenav, $mdToast, $location){
//    $scope.toggleSidenav = function(menuId) {
//        $mdSidenav(menuId).toggle();
//    };
//    $scope.openToast = function($event) {
//        $mdToast.show($mdToast.simple().content('Hello, i am the roast toast!!'));
//    };
//
//    $scope.toggleNavigation = function(siteId) {
//        $location.path('/' + siteId);
//    };
//
//    $scope.title1 = 'Button';
//    $scope.title4 = 'Warn';
//    $scope.isDisabled = true;
//    $scope.googleUrl = 'http://google.com';
//
//    $scope.user = {
//        title: 'Developer',
//        email: 'ipsum@lorem.com',
//        firstName: '',
//        lastName: '' ,
//        company: 'Google' ,
//        address: '1600 Amphitheatre Pkwy' ,
//        city: 'Mountain View' ,
//        state: 'CA' ,
//        biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
//        postalCode : '94043'
//    };


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
