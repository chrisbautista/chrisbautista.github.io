/* Falsey Bouncer
Difficulty: 
Remove all falsey values from an array.

Falsey values in javascript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.filter()

  Run code (ctrl + enter)
  Reset	  Help	  Pair	  Bug

[7,"ate","",false,9]

assert.deepEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9], 'should remove falsey values');should remove falsey values: expected [ 7, 'ate', '', false, 9 ] to deeply equal [ 7, 'ate', 9 ]
assert.deepEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c'], 'should return full array if no falsey elements');
assert.deepEqual(bouncer([false, null, 0]), [], 'should return empty array if all elements are falsey');should return empty array if all elements are falsey: expected [ false, null, 0 ] to deeply equal []

*/

function bouncer(arr) {
    
  return arr.filter(function(val,i,arr){return val;});
}

bouncer([7, 'ate', '', false, 9]);