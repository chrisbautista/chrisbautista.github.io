/****
 *
 * CURRYING
 *
 * Chris Bautista <chris@codespud.ca>
 * @chrisbautista
 *
 ****/

(function(){

    'use strict';


    // function to curry
    function add() {
        if (arguments.length <= 0) return 0; //no arguments

        return Array.prototype.slice.call(arguments).reduce(
            function(a, b) {
                return a + b;
            });
    }

    //  inital try, this one works too
    /*
    function sum() {
        return function() {
            var curriedArgs;

            if(arguments.length === 0) {
                return add.apply(this, arguments);
            }

            curriedArgs = [this];
            curriedArgs.push.apply(curriedArgs, arguments);

            return curry(add.bind.apply(add, curriedArgs));
        };
    }
    */

    /*
     * helper: curry
     */
    function curry(func) {
        return function() {
            var curriedArgs;

            if ((arguments.length === 0)) {
                return func.apply(this, arguments); // run function
            }

            // else return a partially applied function
            curriedArgs = [this];
            curriedArgs.push.apply(curriedArgs, arguments);

            return curry(func.bind.apply(func, curriedArgs));
        };
    }

    // lets try multiplication
    /*
    function multiply() {
        if (arguments.length <= 0) return 0; //no arguments

        return Array.prototype.slice.call(arguments).reduce(
            function(a, b) {
                return a * b;
            });
    }
    */

    var sum, sum10, sum13;
    //var product;

    sum = curry(add); // create curried addition func
    //product = curry(multiply); // create curried multiplication func


    // console.log(add(1, 2, 3, 4), 10); // test function

    /*
     * test cases
     */

    console.log('**** test cases start here ****');
    console.log(sum(), 0);
    console.log(sum(3)(2)(), 5);
    sum10 = sum(2)(4)(4); // ==> Function
     console.log(typeof(sum10), 'function');
    console.log(sum10(), 10); // ==> 10
    sum13 = sum10(3); // ==> Function
     console.log(typeof(sum13), 'function');
    console.log(sum13(), 13); // ==> 13
    console.log(sum13(-4)(), 9); // ==> 9
    console.log(sum(2)(4)(-7)(3)(1)(-8)(2)(-10)(), -13); // ==> -13
    
    //console.log('****multiply');
    //console.log(product(3)(5)(), 15);

}());