/*
 *
 * cashier breakdown
 *
 * chris bautista <chris@codespud.ca>
 * @chrisbautista
 *
 */

function inArray(haystack, needle){
  //console.log(haystack, needle);
  for(var i=0; i<haystack.length; i++){
    if(needle===haystack[i]){
      return true;
    }
  }
  return false;
}

function getSingleChange(amt, tmp){
 var i,j;
 var maxLen = tmp.length;
 var breakdown = [];
 var pocket = [];
  for(i=0; i<maxLen; i++){
    pocket = [];
    // simple
    if (amt % tmp[i] === 0) {

      for(j=0;j<(amt/tmp[i]);j++){
        pocket.push(tmp[i]);
      }
    // combination
    }

    if(pocket.length>0){
      breakdown.push(pocket);
    }

   }// for
   //console.log(breakdown);
   return breakdown;
}

function getComboChange(amt, tmp, first, breakdown){
  console.log(amt, tmp, first,  breakdown);

  breakdown = breakdown || [];

  if ((amt<=0) ){
    return breakdown;
  }


  if(amt-first>=0){
    amt = amt - first;
    console.log("|||", amt);
    breakdown.push(first);
  }else{
    first = tmp.shift();
  }

  return getComboChange(amt, tmp, first, breakdown);
}

function getBreakdown(amt, denomination){
 var tmp = denomination.slice().sort(function(a,b){return b-a;}).reverse();
 var breakdown=[];

 // [20,[1,2,3]]
 // reverse sort then loop down
 console.log(amt, tmp);

 // single
 breakdown = getSingleChange(amt, tmp);

 // combo
 for(var i = 0; i<tmp.length; i++){
  breakdown.push[getComboChange(amt, tmp, tmp[i])];
 }
 return breakdown;
}


console.log(">>>", getBreakdown(200, [25, 5,10]));