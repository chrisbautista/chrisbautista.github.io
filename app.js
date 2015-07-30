(function(){
'use strict';

var tmPromise, myApp = angular.module('codeSpud',[]);

myApp.service('initService', function() {
    //initialize schedule list
    this.projects = {
        list: [
        
            ['/projects/boxerjs/build/','BoxerJS: Lightweight JQuery plugin for adding quick previews.']
        ]
    };
    this.experiments = {
        list: [
          /*  ['/experiments/cbTimer/public_html/','AngularJS: Timer using $timeout service'],*/
            ['/experiments/cbTimerDirective/public_html/','AngularJS: Making timer into a directive'], 
            ['/experiments/bestbuyapi/app/','AngularJS: Creating a Service for AJAX API (Run in Firefox)'],
            ['#','AngularJS: Catch Keypress']
        ]
    };
    this.lessons = {
        list: [
            ['/lessons/javascript/shorthand.js','Javascript Shorthand Constructs'],
            ['/lessons/javascript/balancedParens.html','Problem: Provided a string build a function to check for balanced parens '],
            ['/lessons/javascript/closure.js','Javascript: Closures'],
            ['/lessons/javascript/shorthand.js','Javascript: Shorthand for Common Patterns'],
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
    $scope.projects = initService.projects;

}]);

})();

