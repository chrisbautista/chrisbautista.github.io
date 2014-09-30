'use strict';


function checkTime(i) {
    i = (i < 1) ? 0 : i;
    if (i < 10) i = "0" + i;  // add zero in front of numbers < 10
    return i;
}

var tmPromise, myApp = angular.module('codeSpud',[]);

myApp.service('initService', function() {
    //initialize schedule list
    this.experiments = {
        list: [
            ['/experiments/cbTimer/public_html/','AngularJS: Timer using $timeout service'],
            ['/experiments/cbTimer/public_html/','AngularJS: Append to Table'],
            ['','AngularJS: Catch Keypress']
        ]
    };
    this.lessons = {
        list: [
            ['/lessons/javascript/shorthand.js','Javascript Shorthand Constructs'],
            
        ]
    };
});

myApp.controller('homePageCtrl', ['$scope', 'initService', function ($scope, initService) {

    $scope.experiments = initService.experiments;
    $scope.lessons = initService.lessons;

}]);

