/*

Bonfire: Sum All Numbers in a Range
Difficulty: 
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.reduce()
1

expect(sumAll([1, 4])).to.be.a('Number');
expect(sumAll([1, 4])).to.equal(10);expected 1 to equal 10
expect(sumAll([4, 1])).to.equal(10);expected 1 to equal 10
expect(sumAll([5, 10])).to.equal(45);expected 1 to equal 45
expect(sumAll([10, 5])).to.equal(45);expected 1 to equal 45

 */


function sumAll(arr) {
  var i, num;
  arr = arr.sort(function(a,b){return a-b});
  for(i=arr[0]+1;i<arr[1];i++){arr.push(i);}
  return arr.reduce(function(a,b){return a+b});	
}

sumAll([1, 4]);