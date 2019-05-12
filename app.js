var app = angular.module('jsbin', []);

app.filter('prettyJSON', function () {
    function prettyPrintJson(json) {
      return JSON ? JSON.stringify(json, null, '  ') : 'your browser doesnt support JSON so cant pretty print';
    }
    return prettyPrintJson;
  });


app.controller('DemoCtrl', function($http) {
  
  var vm = this;
  
  var URL = 'http://api.openweathermap.org/data/2.5/weather';
  
  var request = {
    method: 'GET',
    url: URL,
    params: {
       q: 'Bengaluru',
      mode: 'json',
      units: 'imperial',
      cnt: '7',
      appid: 'aa181b0c5b6d5d06956833194391d264'
    }
  };

  
  
  $http(request)
    .then(function(response) {
      vm.data = response.data;
      return json = vm.data;
    }).
    catch(function(response) {
      vm.data = response.data;
    });

  return json = vm.data;
});