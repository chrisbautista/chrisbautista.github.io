/**
 *
 * Return Largest Numbers in Arrays
Difficulty: 
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i] .

If you are writing your own Chai.js tests, be sure to use a deep equal statement instead of an equal statement when comparing arrays.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators

expect( largestOfFour( [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) ).to.be.a('array');
assert.deepEqual( largestOfFour( [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]), [27,5,39,1001], 'arrays should match.');
assert.deepEqual( largestOfFour( [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]), [9,35,97,1000000], 'arrays should match.');
 * 
 */


function max(arr){
  var i, num =0;
  arr = arr.sort(function(a,b){return b-a;})
  return arr[0];
}

function largestOfFour(arr) {
  var i, finalarr=[];
  
  for (i=0;i<arr.length;i++){
    
    
    finalarr.push(max(arr[i]));
    
  }
  
  
  return finalarr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
