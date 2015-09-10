(function(){
'use strict';

var tmPromise; 

angular.module('codeSpud',['ngAnimate'])
       
       .service('initSrvc', InitService)
       .controller('homePageCtrl', HomePageController );

/////////////////////////

function HomePageController ($scope, initSrvc) {
    var vm = this;
    console.log(initSrvc);
    vm.links  = initSrvc.links;
    vm.tags = initSrvc.tags;
    vm.query = "";
    vm.searchTag = searchTag;

    /////////////////////
    function searchTag(tag){
        vm.query = tag;
    }
}

function InitService() {

    this.links = {};
    this.tags = [];


    //initialize schedule
    this.links = [ 
        {
            name: "Projects",
            list: [
            
                ['/Alexandria/','Alexandria: Audiobooks App built with Ionic'],
                ['/projects/boxerjs/build/','BoxerJS: Lightweight JQuery plugin for adding quick previews.']
            ]
        },
        {
            name: "Experiments",
            list: [
              /*  ['/experiments/cbTimer/public_html/','AngularJS: Timer using $timeout service'], */
                ['/experiments/cbTimerDirective/public_html/','AngularJS: Making timer into a directive'],
                ['/experiments/bestbuyapi/app/','AngularJS: Creating a Service for AJAX API (Turn off cross domain checks in browser)'],
                ['#','AngularJS: Catch Keypress']
            ]
        },
        {
            name: "Lessons",
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
        }
    ];


    this.getTags = function(){
        var disTags = this.tags;
        var tmpTag = '';
        function getTagCount(item){
            var tmp = item[1].split(' ');
            for(var i=0; i<tmp.length;i++){
                tmpTag = tmp[i].replace(/\W/g, '');
                if(/[A-Z]/.test( tmpTag[0] )){
                    if(!disTags[tmpTag]){
                        disTags[tmpTag]=1;
                    }else{
                        disTags[tmpTag]++;
                    }
                }
                
            }
        }

        function sortProperties(obj)
        {
            var sortable=[];
            for(var key in obj)
                if(obj.hasOwnProperty(key))
                    sortable.push([key, obj[key]]);

            sortable.sort(function(a, b)
            {
                return b[1]-a[1];
            });

            return sortable; 
        }

        angular.forEach(this.links, function(item){
            angular.forEach(item.list,getTagCount);
        })       
        
        console.log(disTags);

        this.tags = sortProperties(disTags).slice(0,10);

        console.log(disTags);
    }

    this.getTags();
}


})();

