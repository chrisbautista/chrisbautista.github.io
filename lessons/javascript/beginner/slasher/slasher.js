/*

Bonfire: Slasher Flick
Difficulty: 
Return the remaining elements of an array after chopping off n elements from the head.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.slice()
Array.splice()


[1,2,3]

assert.deepEqual(slasher([1, 2, 3], 2), [3], 'should drop the first two elements');should drop the first two elements: expected [ 1, 2, 3 ] to deeply equal [ 3 ]
assert.deepEqual(slasher([1, 2, 3], 0), [1, 2, 3], 'should return all elements');
assert.deepEqual(slasher([1, 2, 3], 9), [], 'should return an empty array');should return an empty array: expected [ 1, 2, 3 ] to deeply equal []

 */
function slasher(arr, howMany) {
  if(howMany<=0) return arr; 
  if(howMany>arr.length) return [];
  return arr.slice(2);
}

console.log(slasher([1, 2, 3], 2));