/*

Bonfire: Diff Two Arrays
Difficulty: 
Compare two arrays and return a new array with any items not found in both of the original arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Comparison Operators
Array.slice()
Array.filter()
Array.indexOf()
Array.concat()

  Run code (ctrl + enter)
  Reset	  Help	  Pair	  Bug

[]

expect(diff([1, 2, 3, 5], [1, 2, 3, 4, 5])).to.be.a('array');
assert.deepEqual(diff(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']), ['pink wool'], 'arrays with only one difference');arrays with only one difference: expected [] to deeply equal [ 'pink wool' ]
assert.includeMembers(diff(['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']), ['diorite', 'pink wool'], 'arrays with more than one difference');arrays with more than one difference: expected [] to be a superset of [ 'diorite', 'pink wool' ]
assert.deepEqual(diff(['andesite', 'grass', 'dirt', 'dead shrub'], ['andesite', 'grass', 'dirt', 'dead shrub']), [], 'arrays with no difference');
assert.deepEqual(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4], 'arrays with numbers');arrays with numbers: expected [] to deeply equal [ 4 ]
assert.includeMembers(diff([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]), ['piglet', 4], 'arrays with numbers and strings');arrays with numbers and strings: expected [] to be a superset of [ 'piglet', 4 ]
assert.deepEqual(diff([], ['snuffleupagus', 'cookie monster', 'elmo']), ['snuffleupagus', 'cookie monster', 'elmo'], 'empty array');empty array: expected [] to deeply equal [ Array(3) ]


 */


function diff(arr1, arr2) {
  var newArr = [], longerArr = arr1.concat(arr2);
  var i;

  newArr = longerArr.filter(function(a){return arr1.indexOf(a) === -1;})
  newArr = newArr.concat(longerArr.filter(function(a){return arr2.indexOf(a) === -1;}));
  //console.log(typeof newArr, arr2);
  return newArr;
}




console.log(">>>",diff([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4]);
console.log(">>>",diff([], ['a', 'b', 'c']), ['a', 'b', 'c']);
console.log(">>>",diff(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], 
					['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']), ['pink wool']);