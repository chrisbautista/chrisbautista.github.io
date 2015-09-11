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
    vm.service = initSrvc;
    vm.query = "";
    vm.searchTag = searchTag;

    vm.service.getLinks().then(function(data){
        console.log("OK",data, vm.service.links);
    });

    /////////////////////
    function searchTag(tag){
        vm.query = tag;
    }
}

function InitService($http) {
    var svc = this;

    this.links = {};
    this.tags = [];

    this.getLinks = function(){
       return $http.get('links.json')
        .then(function(response){
            console.log(response);
            if(response.status===200){
                svc.links = response.data.links;
                svc.getTags();
            }
        });
    };

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

}


})();

