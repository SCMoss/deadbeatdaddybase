var app = angular.module('MyApp', []);

app.service('DeadbeatService', ['$http', function ($http) {
    this.getDeadbeatInfo = function (id) {
        var deadbeat = {};
        console.log('success');
        
     $http.get('' + id).then(function (response) {
            return response.data;
        });
    };
}]);