/*

Bonfire: Where art thou
Difficulty: 
Make a function that looks through an array (first argument) and returns an array of all objects that have equivalent property and value pair (second argument).

For example, if the first argument is [{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], and the second argument is { last: 'Capulet' }, then you must return the the third object from the array (the first argument), because it contains the property and it's value, that was passed on as the second argument.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global Object
Object.hasOwnProperty()
Object.keys()

  Run code (ctrl + enter)
  Reset	  Help	  Pair	  Bug

[]

assert.deepEqual(where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' }), [{ first: 'Tybalt', last: 'Capulet' }], 'should return an array of objects');should return an array of objects: expected [] to deeply equal [ Array(1) ]
assert.deepEqual(where([{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }], { 'a': 1 }), [{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }], 'should return with multiples');should return with multiples: expected [] to deeply equal [ { a: 1 }, { a: 1 }, { a: 1, b: 2 } ]
assert.deepEqual(where([{ 'a': 1, 'b': 2 }, { 'a': 1 }, { 'a': 1, 'b': 2, 'c': 2 }], { 'a': 1, 'b': 2 }), [{ 'a': 1, 'b': 2 }, { 'a': 1, 'b': 2, 'c': 2 }], 'should return two objects in array');should return two objects in array: expected [] to deeply equal [ Array(2) ]
assert.deepEqual(where([{ 'a': 5 }, { 'a': 5 }, { 'a': 5, 'b': 10 }], { 'a': 5, 'b': 10 }), [{ 'a': 5, 'b': 10 }], 'should return a single object in array');should return a single object in array: expected [] to deeply equal [ { a: 5, b: 10 } ]
*/

function where(collection, source) {
  var arr = [], valid; objkeys = Object.keys(source);
  
  for(i=0; i<collection.length;i++){
    valid = false;
    
    if(Object.keys(collection[i]).length>=objkeys.length){
	    for(j=0; j<objkeys.length; j++){
	      
	         if(collection[i][objkeys[j]]===source[objkeys[j]]){
	         	valid = true;
	         }
	       
	         console.log(collection[i][objkeys[j]], source[objkeys[j]], valid, arr);
	    }   
    }

    if(valid) arr.push(collection[i]);
    
  }
  
  
  return arr;
}


console.log(where([{ 'a': 5 }, { 'a': 5 }, { 'a': 5, 'b': 10 }], { 'a': 5, 'b': 10 }));