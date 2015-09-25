var app = angular.module('StarterApp', ['ngMaterial', 'ngRoute', 'ngCookies'])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('cyan')
            .primaryPalette('cyan')
            .accentPalette('light-blue');
        $mdThemingProvider.theme('altTheme')
            .primaryPalette('indigo')
            .accentPalette('purple');
        $mdThemingProvider.theme('green')
            .primaryPalette('autumn')
            .accentPalette('blue');
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
            '50': '043C53',
            '100': '043C53',
            '200': '043C53',
            '300': '043C53',
            '400': '043C53',
            '500': '043C53',
            '600': '043C53',
            '700': '043C53',
            '800': '043C53',
            '900': '043C53',
            'A100': '043C53',
            'A200': '043C53',
            'A400': '043C53',
            'A700': '043C53',
            'contrastDefaultColor': 'light'
        });

        $mdThemingProvider.theme('default')
            .primaryPalette('autumn')
            .accentPalette('autumn1')
            .warnPalette('amber');

        $mdThemingProvider.theme('uce')
            .primaryPalette('toolbarcolor')
            .accentPalette('buttonscolor')
            //.warnPalette('buttonscolor')
            .backgroundPalette('backgroundcolor');

        $mdThemingProvider.setDefaultTheme('default');
        $mdThemingProvider.alwaysWatchTheme(true);

        //prøvepalette
        $mdThemingProvider.definePalette('toolbarcolor', {
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
            'hue-1': '004A61',
            'contrastDefaultColor': 'light'
        });

        $mdThemingProvider.definePalette('headingcolor', {
                '50': 'EEEEEE',
                '100': 'EEEEEE',
                '200': 'EEEEEE',
                '300': 'EEEEEE',
                '400': 'EEEEEE',
                '500': 'EEEEEE',
                '600': 'EEEEEE',
                '700': 'EEEEEE',
                '800': 'EEEEEE',
                '900': 'EEEEEE',
                'A100': 'EEEEEE',
                'A200': 'EEEEEE',
                'A400': 'EEEEEE',
                'A700': 'EEEEEE',
                'contrastDefaultColor': 'dark'
        });

        $mdThemingProvider.definePalette('buttonscolor', {
            '50': 'AA16ED',
            '100': 'AA16ED',
            '200': 'AA16ED',
            '300': 'AA16ED',
            '400': 'AA16ED',
            '500': 'AA16ED',
            '600': 'AA16ED',
            '700': 'AA16ED',
            '800': 'AA16ED',
            '900': 'AA16ED',
            'A100': 'AA16ED',
            'A200': 'AA16ED',
            'A400': 'AA16ED',
            'A700': 'AA16ED',
            'contrastDefaultColor': 'dark'
        });

        $mdThemingProvider.definePalette('backgroundcolor', {
            '50': 'FEFFFF',
            '100': 'FEFFFF',
            '200': 'FEFFFF',
            '300': 'FEFFFF',
            '400': 'FEFFFF',
            '500': 'FEFFFF',
            '600': 'FEFFFF',
            '700': 'FEFFFF',
            '800': 'FEFFFF',
            '900': 'FEFFFF',
            'A100': 'FEFFFF',
            'A200': 'FEFFFF',
            'A400': 'FEFFFF',
            'A700': 'FEFFFF',
            'contrastDefaultColor': 'dark'
        });
    });

app.config(function ($mdIconProvider) {
    $mdIconProvider.fontSet('fa', 'fontawesome');
});

// Refactor this one out
app.config(function ($routeProvider, $locationProvider) {
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
        .when('/colors', {
            templateUrl: 'views/colors.html'
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
        })
        .when('/generelt', {
        templateUrl: 'views/generelt.html'
        })
        .when('/LIGHTFNOL', {
            templateUrl: 'views/LIGHTFNOL.html'
        });


    $locationProvider.html5Mode({
        enable: true,
        requireBase: false
    });
});

app.controller('AppCtrl', ['$scope', '$mdSidenav', '$mdToast', '$location', '$cookies', function ($scope, $mdSidenav, $mdToast, $location, $cookies) {
    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };

    $scope.openToast = function ($event) {
        $mdToast.show($mdToast.simple().content('Message sent'));
    };

    $scope.openRoastToast = function ($event, message) {
        $mdToast.show($mdToast.simple().content(message))
    };

    // Method for toggling navigation from the left sidebar
    $scope.toggleNavigation = function (siteId) {
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
        lastName: '',
        company: 'Google',
        address: '1600 Amphitheatre Pkwy',
        city: 'Mountain View',
        state: 'CA',
        biography: '',
        postalCode: '94043'
    };

    // used to retrieve the possibly saved theme from the client cookie store
    $scope.dynamicTheme = $cookies.get('colorTheme');

    // set the theme and store the setting in a cookie
    $scope.toggleDynamicTheme = function (theme) {
        $scope.dynamicTheme = theme;
        $cookies.put('colorTheme', theme)
    };
}]);

//Chips
(function () {
    'use strict';
    angular
        .module('staticChipsDemo', ['ngMaterial'])
        .controller('DemoCtrl', DemoCtrl);
    function DemoCtrl($timeout, $q) {
        this.chipText = 'Football';
    }
})();
//Chips stop

// Whiteframes as output fields
angular.module('whiteframeBasicUsage', ['ngMaterial']);

app.directive('ngPrism', [function () {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            element.ready(function () {
                Prism.highlightElement(element[0]);
            });
        }
    }
}]);

app.directive('ngSvgAnimation', [function () {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            element.ready(function () {
                var docElem = window.document.documentElement;

                window.requestAnimFrame = function () {
                    return (
                        window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.oRequestAnimationFrame ||
                        window.msRequestAnimationFrame ||
                        function (/* function */ callback) {
                            window.setTimeout(callback, 1000 / 60);
                        }
                    );
                }();

                window.cancelAnimFrame = function () {
                    return (
                        window.cancelAnimationFrame ||
                        window.webkitCancelAnimationFrame ||
                        window.mozCancelAnimationFrame ||
                        window.oCancelAnimationFrame ||
                        window.msCancelAnimationFrame ||
                        function (id) {
                            window.clearTimeout(id);
                        }
                    );
                }();

                function SVGEl(el) {
                    this.el = el;
                    this.image = this.el.previousElementSibling;
                    this.current_frame = 0;
                    this.total_frames = 60;
                    this.path = new Array();
                    this.length = new Array();
                    this.handle = 0;
                    this.init();
                }

                SVGEl.prototype.init = function () {
                    var self = this;
                    [].slice.call(this.el.querySelectorAll('path')).forEach(function (path, i) {
                        self.path[i] = path;
                        var l = self.path[i].getTotalLength();
                        self.length[i] = l;
                        self.path[i].style.strokeDasharray = l + ' ' + l;
                        self.path[i].style.strokeDashoffset = l;
                    });
                };

                SVGEl.prototype.render = function () {
                    if (this.rendered) return;
                    this.rendered = true;
                    this.draw();
                };

                SVGEl.prototype.draw = function () {
                    var self = this,
                        progress = this.current_frame / this.total_frames;
                    if (progress > 1) {
                        window.cancelAnimFrame(this.handle);
                        this.showImage();
                    } else {
                        this.current_frame++;
                        for (var j = 0, len = this.path.length; j < len; j++) {
                            this.path[j].style.strokeDashoffset = Math.floor(this.length[j] * (1 - progress));
                        }
                        this.handle = window.requestAnimFrame(function () {
                            self.draw();
                        });
                    }
                };

                SVGEl.prototype.showImage = function () {
                    classie.add(this.image, 'show');
                    classie.add(this.el, 'hide');
                };

                function getViewportH() {
                    var client = docElem['clientHeight'],
                        inner = window['innerHeight'];

                    if (client < inner)
                        return inner;
                    else
                        return client;
                }

                function scrollY() {
                    return window.pageYOffset || docElem.scrollTop;
                }

                // http://stackoverflow.com/a/5598797/989439
                function getOffset(el) {
                    var offsetTop = 0, offsetLeft = 0;
                    do {
                        if (!isNaN(el.offsetTop)) {
                            offsetTop += el.offsetTop;
                        }
                        if (!isNaN(el.offsetLeft)) {
                            offsetLeft += el.offsetLeft;
                        }
                    } while (el = el.offsetParent)

                    return {
                        top: offsetTop,
                        left: offsetLeft
                    };
                }

                function inViewport(el, h) {
                    var elH = el.offsetHeight,
                        scrolled = scrollY(),
                        viewed = scrolled + getViewportH(),
                        elTop = getOffset(el).top,
                        elBottom = elTop + elH,
                    // if 0, the element is considered in the viewport as soon as it enters.
                    // if 1, the element is considered in the viewport only when it's fully inside
                    // value in percentage (1 >= h >= 0)
                        h = h || 0;

                    return (elTop + elH * h) <= viewed && (elBottom) >= scrolled;
                }

                function init() {
                    var svgs = Array.prototype.slice.call(document.querySelectorAll('#main svg')),
                        svgArr = new Array(),
                        didScroll = false,
                        resizeTimeout;

                    // the svgs already shown...
                    svgs.forEach(function (el, i) {
                        var svg = new SVGEl(el);
                        svgArr[i] = svg;
                        setTimeout(function (el) {
                            return function () {
                                if (inViewport(el.parentNode)) {
                                    svg.render();
                                }
                            };
                        }(el), 250);
                    });

                    var scrollHandler = function () {
                            if (!didScroll) {
                                didScroll = true;
                                setTimeout(function () {
                                    scrollPage();
                                }, 60);
                            }
                        },
                        scrollPage = function () {
                            svgs.forEach(function (el, i) {
                                if (inViewport(el.parentNode, 0.5)) {
                                    svgArr[i].render();
                                }
                            });
                            didScroll = false;
                        },
                        resizeHandler = function () {
                            function delayed() {
                                scrollPage();
                                resizeTimeout = null;
                            }

                            if (resizeTimeout) {
                                clearTimeout(resizeTimeout);
                            }
                            resizeTimeout = setTimeout(delayed, 200);
                        };

                    window.addEventListener('scroll', scrollHandler, false);
                    window.addEventListener('resize', resizeHandler, false);
                }

                init();
            })
        }
    }
}])