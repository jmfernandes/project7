mainApp.controller('ex5Controller', [function(){
  var self = this;
  self.submit = function(){
    console.log('user submitted with ',
        self.user);
  };
  self.sports = [
    {label: 'Basketball',selected: 'YES'},
    {label: 'Cricket',selected: 'NO'},
    {label: 'Soccer',selected: 'NO'},
    {label: 'Swimming',selected: 'YES'}
  ];
  self.countries = [
    {label:'USA',id:1},
    {label:'India',id:2},
    {label:'Other',id:3}
  ];
  self.selectedCountryId = 2;
  self.selectedCountry = self.countries[1];
}]);
