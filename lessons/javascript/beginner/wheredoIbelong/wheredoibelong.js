/*

Where do I belong
Difficulty: 
Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument).

For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (0th index), but less than 2 (1st index).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.sort()
50

assert.strictEqual(where([10, 20, 30, 40, 50], 35), 3, '35 should be placed at index 3');35 should be placed at index 3: expected 35 to equal 3
assert.strictEqual(where([10, 20, 30, 40, 50], 30), 2, '30 should be placed at index 2');30 should be placed at index 2: expected 30 to equal 2
assert.strictEqual(where([40, 60], 50), 1, '50 should be placed at index 1');50 should be placed at index 1: expected 50 to equal 1
assert.strictEqual(where([5, 3, 20, 3], 3), 0, '3 should be placed at index 0');3 should be placed at index 0: expected 3 to equal 0
assert.strictEqual(where([2, 20, 10], 1), 0, '1 should be placed at index 0');1 should be placed at index 0: expected 1 to equal 0
assert.strictEqual(where([2, 5, 10], 15), 3, '15 should be placed at index 3');15 should be placed at index 3: expected 15 to equal 3

*/

function where(arr, num) {
  arr.push(num);
  return arr.sort(function(a,b){return a-b}).indexOf(num);
}

where([40, 60], 50);