mainApp.controller('ex1Controller', [function(){
  var self = this;
  self.message = 'ex1 view';
  self.notes =[
    {id:1, label: 'first note',done:false, assignee:'Shyam'},
    {id:2, label: 'second note',done:false},
    {id:3, label: 'third note',done:true},
    {id:4, label: 'fourth note',done:false,assignee:'Brad'}
  ];
  self.getNoteClass = function(status){
    return {
      done: status,
      pending: !status
    };
  };
}]);
