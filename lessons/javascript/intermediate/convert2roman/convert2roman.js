/*

Roman Numeral Converter
Difficulty: 2
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.splice()
Array.indexOf()
Array.join()


expect(convert(12)).to.equal("XII");expected 12 to equal 'XII'
expect(convert(5)).to.equal("V");expected 5 to equal 'V'
expect(convert(9)).to.equal("IX");expected 9 to equal 'IX'
expect(convert(29)).to.equal("XXIX");expected 29 to equal 'XXIX'
expect(convert(16)).to.equal("XVI");expected 16 to equal 'XVI'

*/
function convert(num) {
  var romanNumerals = ['I','IV', 'V', 'IX', 'X', 'XL' ,'L', 'XC', 'C', 'CD' , 'D', 'CM' , 'M'];
  var equivalent = [1, 4, 5, 9, 10, 40, 50, 90 ,100, 400, 500, 900, 1000];
  
  
  // get the highest roman numeral
  // get modulus
  // assign
  // 
  function padString(str,num1){
  	var newStr='',i;
  	for(i=0;i<num1;i++){
  		newStr += String(str+'');
  	}
  	return newStr;
  }

  function toRoman(num1,pow){


    if(num1 === '0') return ''; 
    newNum = num1 * (Math.pow(10, pow));
    if (equivalent.indexOf(newNum) !== -1){
    	return romanNumerals[equivalent.indexOf(newNum)];
    }else{
       
      for(i=2;i<equivalent.length;i=i+2){
        if((newNum/equivalent[i]<1)){
	        return padString(romanNumerals[i-2], num1);      
        }else{
        	if((newNum/equivalent[i]>2) ){
	        	return padString(romanNumerals[i+2], num1);        
	        }else if((newNum/equivalent[i]<2)&& (newNum%equivalent[i]<0)){
	        	return padString(romanNumerals[i-2], num1); 
	        }
        	return romanNumerals[i] +  padString(romanNumerals[i-2],Math.floor(newNum/equivalent[i]));
        }
      }
      
    }
 }
  
  function convertRoman(num1){
    var numStr;
    var i, roman = '';  


    
    if(num1<=0) return roman;
    
    // convert to string
    numStr = String(+num1).split('');
 
    for(i=0; i<numStr.length; i++){

      roman = roman + toRoman(numStr[i],numStr.length - 1 - i);
    }
    return roman;
  }
  
  
 return convertRoman(num);
}







console.log(convert(29),'XXIX');
console.log(convert(129),'CXXIX');
console.log(convert(1029), 'MXXIX');
console.log(convert(5), 'V');
console.log(convert(3001), 'MMMI');

