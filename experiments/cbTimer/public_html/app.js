'use strict';


function checkTime(i) {
    i = (i < 1) ? 0 : i;
    if (i < 10) i = "0" + i;  // add zero in front of numbers < 10
    return i;
}

var tmPromise, myApp = angular.module('cbTimer',[]);


myApp.service('initService', function($rootScope) {
    //initialize schedule list
    this.timeSchedule = {
        history: []
    };
});

myApp.controller('cbTimerCtrl', ['$scope', '$timeout','initService', function ($scope, $timeout, initService) {

    $scope.timeStart = 0;
    $scope.timeEnd = 0;
    $scope.timeSchedule = initService.timeSchedule;
    $scope.mode = "Start";
    $scope.timer = "00:00:00";

    $scope.startTimer = function () {
        $scope.mode = "Stop";
        var today = new Date();
        $scope.timeEnd = today.getTime();
        var ms = Math.floor(($scope.timeEnd - $scope.timeStart)/1000);
        //$scope.ms = ms;
        var h =  checkTime(Math.floor(ms/3600));
            ms = Math.floor(ms%3600);
        var m = checkTime(Math.floor(ms/60));
            ms = Math.floor(ms%60);
        var s = checkTime(Math.floor(ms));

        $scope.timer = h + ":" + m + ":" + s;
        tmPromise = $timeout(function () {
            $scope.startTimer();
        }, 500);


    };

    
    $scope.stopTimer = function () {
        var dt = new Date();
        $scope.mode = "Start";
        $timeout.cancel(tmPromise); 
        // add to history
        $scope.timeSchedule.history.push([$scope.timeStart,
                                          $scope.timeEnd,
                                          ($scope.timeEnd-$scope.timeStart)/1000]);
    };

    $scope.toggleTimer = function () {

        if ($scope.mode === 'Start') {
            var today = new Date();
            $scope.timeStart = today.getTime(),
            $scope.startTimer();
        } else {
            $scope.stopTimer();
        }

    };


}]);

