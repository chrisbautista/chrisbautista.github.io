(function(){
'use strict';

var tmPromise, myApp = angular.module('codeSpud',['ngAnimate']);

myApp.service('initService', function() {
    //initialize schedule
    this.projects = {
        list: [
        
            ['/Alexandria/','Alexandria: Audiobooks App built with Ionic'],
            ['/projects/boxerjs/build/','BoxerJS: Lightweight JQuery plugin for adding quick previews.']
        ]
    };
    this.experiments = {
        list: [
          /*  ['/experiments/cbTimer/public_html/','AngularJS: Timer using $timeout service'], */
            ['/experiments/cbTimerDirective/public_html/','AngularJS: Making timer into a directive'],
            ['/experiments/bestbuyapi/app/','AngularJS: Creating a Service for AJAX API (Turn off cross domain checks in browser)'],
            ['#','AngularJS: Catch Keypress']
        ]
    };
    this.lessons = {
        list: [
            ['/lessons/javascript/shorthand.js','Javascript Shorthand Constructs'],
            ['/lessons/javascript/balancedParens.html','Problem: Provided a string build a function to check for balanced parens '],
            ['/lessons/javascript/closure.js','Javascript: Closures'],
            ['/lessons/javascript/shorthand.js','Javascript: Shorthand for Common Patterns'],
            
            ['/lessons/css/margin_collapse.html','CSS: Margin Collapse'],
            ['#','Javascript Best Practices'],
            ['#','Javascript Design Patterns: Singleton'],
            ['#','Javascript Design Patterns: Factory'],
            ['#','Javascript Design Patterns: Decorator'],
            ['#','JSLint: Unnecessary `else` after disruption']
            
        ]
    };
    this.tags = [];
    this.getTags = function(){
        function getTagCount(item){
            var tmp = item[1].split(' ');
            for(var i=0; i<tmp.length;i++){
                if(!this.tags[tmp[i]]){
                     this.tags[tmp[i]]=1;
                }else{
                    this.tags[tmp[i]]++;
                }
            }
        }

        function sortProperties(obj, isNumericSort)
        {
            isNumericSort=isNumericSort || false; // by default text sort
            var sortable=[];
            for(var key in obj)
                if(obj.hasOwnProperty(key))
                    sortable.push([key, obj[key]]);
            if(isNumericSort)
                sortable.sort(function(a, b)
                {
                    return a[1]-b[1];
                });
            else
                sortable.sort(function(a, b)
                {
                    var x=a[1].toLowerCase(),
                        y=b[1].toLowerCase();
                    return x<y ? -1 : x>y ? 1 : 0;
                });
            return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
        }
        angular.forEach(this.projects.list,getTagCount);
        angular.forEach(this.experiments.list,getTagCount);
        angular.forEach(this.lessons.list,getTagCount);

        console.log(this.tags);

        this.tags = sortProperties(this.tags, true);

    }
});

myApp.controller('homePageCtrl', ['$scope', 'initService', function ($scope, initService) {

    $scope.experiments = initService.experiments;
    $scope.lessons = initService.lessons;
    $scope.projects = initService.projects;
    $scope.tags = initService.tags;

}]);

})();

