'use strict';


function checkTime(i) {
    i = (i < 1) ? 0 : i;
    if (i < 10) i = "0" + i;  // add zero in front of numbers < 10
    return i;
}

var tmPromise, myApp = angular.module('codeSpud',[]);

myApp.service('initService', function($rootScope) {
    //initialize schedule list
    this.experiments = {
        list: [
            ['/experiments/cbTimer/public_html/','AngularJS: Timer']
        ]
    };
});

myApp.controller('homePageCtrl', ['$scope', 'initService', function ($scope, initService) {

    $scope.experiments = initService.experiments;

}]);

