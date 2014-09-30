/**
 * Javascript Lessons: Javascript shorthand
 * @author chrisbautista/codespud
 * @since 09/29/2014
 */

//========================================        
/**
 * Simplify variable declarations
 * var varName, varName2, varName;
 * or
 * var varName=0, varName;
 * you can mix declarations and assignments
 */
var param1 = 0,
    arr = [0, 1],
    i;


//========================================        
/**
 * if else
 */
var foo = true;
var baz;
if (foo) {
    baz = "someValue";
} else {
    baz = "otherValue";
}

// @shorthand
var baz = foo ? "someValue" : "otherValue";

// another example
var foz = 6;
var baz = foz > 10 ? 1000 : 1;

// can be used in concatenation
// concat(+) operator has higher priority than ?; 
// may cause unexpected results
// thus the parenthesis
var bar = "great", foo = true;

alert("this is " + (foo ? bar : "terrible") + "!"); // this is great

// nested version
var foo = 100;
var bar = foo > 0 ? ((foo < 1) ? 1 : 10) : 0;

//=====================================
/**
 * checking if a variable is not undefined or empty
 */
var variable1;
if (variable1 !== null || variable1 !== undefined || variable1 !== '') {
    var variable2 = variable1;
}

//shorthand
var variable2 = variable1 || '';

// use for returns
function mfunc() {
    'use strict';
    
    var ret = 1;

    if (ret !== undefined) {
        return ret;
    }

    return "baz";
}

function mfunc() {
    'use strict';

    var ret = 1;

    return ret || "baz";
}

//=====================================
/**
 * 
 * @type Boolean|Boolean|Number
 */
var foo;
if (foo !== true) {
    // do something...
}
//shorthand
if (!foo) {
    // do something
}


//=====================================
/**
 * calling functions based on a flag or dependent on a value
 */

// e.g. functions
function sunflower(){
    // do something ...
}
function orchid(){
    // do something ...
}

var faveColor = "white";

// longhand
if (faveColor === "yellow") {
    sunflower();
} else {
    orchid();
}

// shorthand
(faveColor === "yellow" ? sunflower : orchid)();

