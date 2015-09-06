/*

Bonfire: Truncate a string
Difficulty: 
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a '...' ending.

Note that the three dots at the end add to the string length.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:


"A-tisket ..."

expect(truncate('A-tisket a-tasket A green and yellow basket', 11)).to.eqls('A-tisket...');expected 'A-tisket ...' to deeply equal 'A-tisket...'
expect(truncate('Peter Piper picked a peck of pickled peppers', 14)).to.eqls('Peter Piper...');expected 'Peter Piper ...' to deeply equal 'Peter Piper...'
assert(truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length) === 'A-tisket a-tasket A green and yellow basket', 'should not truncate if string is = length');
assert.strictEqual(truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2), 'A-tisket a-tasket A green and yellow basket', 'should not truncate if string is < length');

 */

function truncate(str, num) {
  if(str.length > num){
    return str.slice(0,num-3) + '...';
  }else if(str.length <= num){
    return str;
  }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
