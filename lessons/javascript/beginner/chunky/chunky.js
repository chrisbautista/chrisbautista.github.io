/*

Bonfire: Chunky Monkey
Difficulty: 
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.push()


["a","b","c","d"]

assert.deepEqual(chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']], 'should return chunked arrays');should return chunked arrays: expected [ 'a', 'b', 'c', 'd' ] to deeply equal [ [ 'a', 'b' ], [ 'c', 'd' ] ]
assert.deepEqual(chunk([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]], 'should return chunked arrays');should return chunked arrays: expected [ 0, 1, 2, 3, 4, 5 ] to deeply equal [ [ 0, 1, 2 ], [ 3, 4, 5 ] ]
assert.deepEqual(chunk([0, 1, 2, 3, 4, 5], 2), [[0, 1], [2, 3], [4, 5]], 'should return chunked arrays');should return chunked arrays: expected [ 0, 1, 2, 3, 4, 5 ] to deeply equal [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ]
assert.deepEqual(chunk([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]], 'should return the last chunk as remaining elements');should return the last chunk as remaining elements: expected [ 0, 1, 2, 3, 4, 5 ] to deeply equal [ [ 0, 1, 2, 3 ], [ 4, 5 ] ]

 */

function chunk(arr, size) {
  var i, tmpArr=[], tmpchunk=[];
  
  for(i=0;i<arr.length;i++){
    
    console.log(arr[i], tmpchunk, tmpchunk.length,size,i,arr.length);
    	
    tmpchunk.push(arr[i]);
    
    if((tmpchunk.length===size)||(i===arr.length-1)){
       tmpArr.push(tmpchunk);
       tmpchunk = [];
    }
    
    
  }
  
  
  return tmpArr;
}

console.log(chunk(['a', 'b', 'c', 'd', 'e'], 2));