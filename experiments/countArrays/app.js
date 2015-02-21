/**
 * User: chrisbautista
 * Date: 14-12-21
 * Time: 2:39 PM
 */


(function (){

    var inputArr = ["dog","dog","cat","horse","dog","cat"];
    console.log(inputArr);

    var tmpArray = [];

    function countArrItems(val){

      if(tmpArray[val]){
         tmpArray[val] = tmpArray[val] + 1;
      }else{
         tmpArray[val] = 1;
      }

    }

    inputArr.sort().forEach(countArrItems);

    console.log(tmpArray);

    tmpArray = tmpArray.sort(function (a , b){
       return a - b;
    });

    console.log(tmpArray);
}());