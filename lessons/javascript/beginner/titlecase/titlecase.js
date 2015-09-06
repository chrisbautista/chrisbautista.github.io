/*

Title Case a Sentence
Difficulty: 
Return the provided string with the first letter of each word capitalized.

For the purpose of this exercise, you should also capitalize connecting words like 'the' and 'of'.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.charAt()

expect(titleCase("I'm a little tea pot")).to.be.a('String');
expect(titleCase("I'm a little tea pot")).to.equal("I'm A Little Tea Pot");expected 'I\'m a little tea pot' to equal 'I\'m A Little Tea Pot'
expect(titleCase("sHoRt AnD sToUt")).to.equal("Short And Stout");expected 'sHoRt AnD sToUt' to equal 'Short And Stout'
expect(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).to.equal("Here Is My Handle Here Is My Spout");expected 'HERE IS MY HANDLE HERE IS MY SPOUT' to equal 'Here Is My Handle Here Is My Spout'


*/
function titleCase(str) {
  var tmpArr,i, newArr=[], tmp='';
  
  if(str.length>0){
    
    str = str.toLowerCase();
    tmpArr = str.split(' ');
  
    for(i=0;i<tmpArr.length; i++){
      
      tmp = tmpArr[i].charAt(0).toUpperCase();
      tmpArr[i] = tmp + tmpArr[i].slice(1);
      
    }
    
  }
  //return (tmpArr)
  return tmpArr.join(' ');
}

titleCase("I'm a little tea pot");