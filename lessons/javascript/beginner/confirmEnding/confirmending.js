/*
Confirm the Ending
Difficulty: 
Check if a string (first argument) ends with the given target string (second argument).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.substr()

assert.strictEqual(end('Bastian', 'n'), true, 'should equal true if target equals end of string');
//should equal true if target equals end of string: expected 'Bastian' to equal true
assert.strictEqual(end('Connor', 'n'), false, 'should equal false if target does not equal end of string');
//should equal false if target does not equal end of string: expected 'Connor' to equal false
assert.strictEqual(end('Walking on water and developing software from a specification are easy if both are frozen.', 'specification'), false, 'should equal false if target does not equal end of string');
//should equal false if target does not equal end of string: expected 'Walking on water and developing software from a specification are easy if both are frozen.' to equal false
assert.strictEqual(end('He has to give me a new name', 'name'), true, 'should equal true if target equals end of string');
//should equal true if target equals end of string: expected 'He has to give me a new name' to equal true
assert.strictEqual(end('If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing', 'mountain'), false, 'should equal false if target does not equal end of string');
//should equal false if target does not equal end of string: expected 'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing' to equal false
 */
function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  
  return str.substr(-1*(target.length)) === target;
}

end('Bastian', 'n');