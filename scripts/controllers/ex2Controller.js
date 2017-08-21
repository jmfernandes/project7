mainApp.controller('ex2Controller', [function(){
  var self = this;
  self.message = 'ex2 view';
  self.notes = {
    shyam: {
      id: 1,
      label: 'first note',
      done:false
    },
    Misko: {
      id: 3,
      label: 'finished third note',
      done: true
    },
    brad:{
      id:2,
      label: 'second note',
      done:false
    }
  };
}]);
