mainApp.controller('HomeController', [function(){
  var homeCtrl = this;
  homeCtrl.message = 'This is the home page';
  homeCtrl.math = _.add(6, 4);
}]);
