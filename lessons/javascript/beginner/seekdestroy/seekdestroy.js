/*

Seek and Destroy
Difficulty: 
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arguments object
Array.filter()

  Run code (ctrl + enter)
  Reset	  Help	  Pair	  Bug

[1,2,3,1,2,3]

assert.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1], 'should remove correct values from an array');should remove correct values from an array: expected [ 1, 2, 3, 1, 2, 3 ] to deeply equal [ 1, 1 ]
assert.deepEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1], 'should remove correct values from an array');should remove correct values from an array: expected [ 1, 2, 3, 5, 1, 2, 3 ] to deeply equal [ 1, 5, 1 ]
assert.deepEqual(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1], 'should accept more than two additional arguments');should accept more than two additional arguments: expected [ 3, 5, 1, 2, 2 ] to deeply equal [ 1 ]
assert.deepEqual(destroyer([2, 3, 2, 3], 2, 3), [], 'should remove correct values from an array');should remove correct values from an array: expected [ 2, 3, 2, 3 ] to deeply equal []
assert.deepEqual(destroyer(['tree', 'hamburger', 53], 'tree', 53), ['hamburger'], 'should handle NaN-elements');should handle NaN-elements: expected [ 'tree', 'hamburger', 53 ] to deeply equal [ 'hamburger' ]

 */

function destroyer(arr) {
  var i, args = arguments;
  
  for (i=1; i < args.length; i++){
     arr = arr.filter(function(a,id,arr){
       return a !== args[i];
     });

  }
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));