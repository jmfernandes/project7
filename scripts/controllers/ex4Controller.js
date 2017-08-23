mainApp.controller('ex4Controller', [function(){
  var self = this;
  self.withoutModelOptions='';
  var _localVar = '';
  self.modelOptions ={
    updateOn: 'default blur',
    debounce:{
      default: 1000,
      blur: 0
    },
    getterSetter: true,
    allowInvalid: true
  };
  this.withModelOptions = function(txt){
    if(angular.isDefined(txt)){
      _localVar = txt;
    } else{
      return _localVar;
    }
  };
}]);
