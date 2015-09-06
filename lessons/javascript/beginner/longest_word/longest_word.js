/*

Bonfire: Find the Longest Word in a String
Difficulty: 
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.split()
String.length


expect(findLongestWord('The quick brown fox jumped over the lazy dog')).to.be.a('Number');
expect(findLongestWord('The quick brown fox jumped over the lazy dog')).to.equal(6);
expect(findLongestWord('May the force be with you')).to.equal(5);
expect(findLongestWord('Google do a barrel roll')).to.equal(6);
expect(findLongestWord('What is the average airspeed velocity of an unladen swallow')).to.equal(8);
expect(findLongestWord('What if we try a super-long word such as otorhinolaryngology')).to.equal(19);


*/


function findLongestWord(str) {
  
  var words = str.split(' ');
  var longestWord = '';
  for(var i=0; i<words.length; i++){
    
      if(words[i].length>longestWord.length){
        longestWord = words[i];
      }
    
  }
  
  return longestWord.length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
