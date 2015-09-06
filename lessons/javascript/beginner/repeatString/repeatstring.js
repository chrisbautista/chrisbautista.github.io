/*

Repeat a string repeat a string
Difficulty: 
Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global String Object


assert.strictEqual(repeat('*', 3), '***', 'should repeat a string n times');should repeat a string n times: expected '*' to equal '***'
assert.strictEqual(repeat('abc', 3), 'abcabcabc', 'should repeat a string n times');should repeat a string n times: expected 'abc' to equal 'abcabcabc'
assert.strictEqual(repeat('abc', -2), '', 'should return an empty string for negative numbers');should return an empty string for negative numbers: expected 'abc' to equal ''

 */

function repeat(str, num) {
  var i, tmpstr='';
  if( num <= 0) return '';
  
  for(i=0; i<num;i++){
    tmpstr += str;
  }
  
  return tmpstr;
}

repeat('abc', 3);