mainApp.controller('ex3Controller', [function(){
  var self = this;
  self.submit1 = function(){
    console.log('user submitted with ',
        self.user1);
  };
  self.submit2 = function(){
    console.log('user submitted with ',
        self.user2);
  };
}]);
