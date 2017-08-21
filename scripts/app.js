var mainApp = angular.module("viewApp", ['ngRoute']);
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
		.otherwise({
			redirectTo: '/home'
		});
});
