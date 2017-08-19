var viewController = function($scope){
  var mainCtrl = this;
  mainCtrl.message = 'hello there, this is the main message';
  $scope.message2 = 'second message';
};

viewController.$inject = ['$scope']; //this needed instead of doing
// mainApp.controller = ('viewController',['$scope',function($scope){}]);
//the above line is in line dependency injection, but if you do the new
//style where you define a varable as the controller then you need
//to inject so that it works while minify

mainApp.controller('viewName',viewController);
