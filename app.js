'use strict';


function checkTime(i) {
    i = (i < 1) ? 0 : i;
    if (i < 10) i = "0" + i;  // add zero in front of numbers < 10
    return i;
}

var tmPromise, myApp = angular.module('codeSpud',[]);

myApp.service('initService', function() {
    //initialize schedule list
    this.projects = {
        list: [
            ['/Khrunus','Khrunus: pure html5 for timekeeping']
            
        ]
    };
    this.experiments = {
        list: [
            ['/experiments/cbTimer/public_html/','AngularJS: Timer using $timeout service'],
            ['/experiments/cbTimer/public_html/','AngularJS: Append to Table'],
            ['#','AngularJS: Catch Keypress']
        ]
    };
    this.lessons = {
        list: [
            ['/lessons/javascript/shorthand.js','Javascript Shorthand Constructs'],
            ['/lessons/javascript/balancedParens.html','Problem: Provided a string build a function to check for balanced parens '],
            ['#','Javascript Best Practices'],
            ['#','Javascript Design Patterns: Singleton'],
            ['#','Javascript Design Patterns: Factory'],
            ['#','Javascript Design Patterns: Decorator'],
            ['#','JSLint: Unnecessary `else` after disruption']
            
        ]
    };
});

myApp.controller('homePageCtrl', ['$scope', 'initService', function ($scope, initService) {

    $scope.experiments = initService.experiments;
    $scope.lessons = initService.lessons;

}]);

