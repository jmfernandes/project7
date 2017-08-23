var mainApp = angular.module("viewApp", ['ngRoute','ngMessages']);
// allow DI for use in controllers, unit tests
mainApp.constant('_', window._);
// use in views, ng-repeat="x in _.range(3)"
mainApp.run(function ($rootScope) {
   $rootScope._ = window._;
});

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'HomeController as home'
		})
    .when('/ex1', {
      templateUrl: 'views/ex1.html',
      controller: 'ex1Controller as ex1'
    })
    .when('/ex2', {
      templateUrl: 'views/ex2.html',
      controller: 'ex2Controller as ex2'
    })
    .when('/ex3', {
      templateUrl: 'views/ex3.html',
      controller: 'ex3Controller as ctrl'
    })
    .when('/ex4', {
      templateUrl: 'views/ex4.html',
      controller: 'ex4Controller as ctrl'
    })
    .when('/ex5', {
      templateUrl: 'views/ex5.html',
      controller: 'ex5Controller as ctrl'
    })
		.otherwise({
			redirectTo: '/home'
		});
});
