function palindrome(str) {
  
  if(str.length===0) return false;
  str = str.replace(/[ .,-\/#!$%\^&\*;:{}=\-_`~()]/g,"")
                .toLowerCase();
  
  var tmpStr = str.split('')
                .reverse().join('');
  
  if(tmpStr!==str){
    return false;
  }
  
  
  // Good luck!
  return true;
}

//todo : not using array functions

palindrome("eye");