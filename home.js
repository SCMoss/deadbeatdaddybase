var app = angular.module('MyApp');

var controller = ('MainController', 'DeadbeatService', [$scope, function ($scope, DeadbeatService) {
            $scope.getDeadbeat = function () {
                console.log('clicked');
                DeadbeatService.getDeadbeatinfo($scope.deadbeatID).then(function (data)) {
                    $scope.deadbeat = data;
                    console.log('$Scope.deadbeat', '$scope.deadbeat')
                }
            $scope.submitForm = function(input) {
                
            }
            }]);;