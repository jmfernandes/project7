mainApp.controller('ex5Controller', [function(){
  var self = this;
  self.submit = function(){
    console.log('user submitted with ',
        self.user);
  };
}]);
