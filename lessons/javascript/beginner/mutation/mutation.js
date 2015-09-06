/* Mutations
Difficulty: 1
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ['hello', 'Hello'], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ['hello', 'hey'] should return false because the string 'hello' does not contain a 'y'.

Lastly, ['Alien', 'line'], should return true because all of the letters in 'line' are present in 'Alien'.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.indexOf()

  Run code (ctrl + enter)
  Reset	  Help	  Pair	  Bug

["hello","hey"]

expect(mutation(['hello', 'hey'])).to.be.false;expected [ 'hello', 'hey' ] to be false
expect(mutation(['hello', 'Hello'])).to.be.true;expected [ 'hello', 'Hello' ] to be true
expect(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu'])).to.be.true;expected [ Array(2) ] to be true
expect(mutation(['Mary', 'Army'])).to.be.true;expected [ 'Mary', 'Army' ] to be true
expect(mutation(['Mary', 'Aarmy'])).to.be.true;expected [ 'Mary', 'Aarmy' ] to be true
expect(mutation(['Alien', 'line'])).to.be.true;expected [ 'Alien', 'line' ] to be true
expect(mutation(['floor', 'for'])).to.be.true;expected [ 'floor', 'for' ] to be true
expect(mutation(['hello', 'neo'])).to.be.false;expected [ 'hello', 'neo' ] to be false

*/

function mutation(arr) {
  var i, tmpWord;
  // normalize
  tmpWord = arr[1].toLowerCase().split('');
  for(i=0; i<tmpWord.length;i++){
  	if(arr[0].toLowerCase().split('').indexOf(tmpWord[i])=== -1){
  		return false;	
  	}
  }		

  return true;
}



console.log(mutation(['hello', 'hey']));