/*
 * Problem: Provided a string build a function to check for balanced parens
 * (,),[,],{,}
 * e.g.
 * (true?x:y) - true
 * )( - false
 * (] - false
 * (1)/(2+3)() - true
 */

(function(){

    'use strict';

    /*
     * isBalancedV1, counter - array iterator ** FAILED **
     * @param {string} c
     * @returns boolean
     */
    function isBalancedV1 (sStatement){ /** FAILED **/

       var  c,itmp=0;

        if(sStatement){
            for(var i; i<sStatement.length; i++){
                c = sStatement[0];
                if (c==='(') {
                    itmp++;
                }else if(c===')') {
                    itmp--;
                    if(itmp<0){
                        console.log('neg');
                        break;
                    }
                }
                sStatement = sStatement.substr(1);
            }

            return itmp === 0 ? true : false;
        }

        return false;
    }

    /*
     * isBalancedV2, counter - object iterator ** FAILED **
     * @param {string} c
     * @returns boolean
     */

    function isBalancedV2(sStatement){ // try 2

        var c, iLevels = 0, // parens level ( = 1, () = 0, (()) = 2, ) = err
            openParens = '({[',
            closeParens = ')}]';

        for(var i in sStatement){
            c = sStatement[i];
           // console.log(c + ' o found'+iLevels);
            if(openParens.indexOf(c)!==-1){
                ++iLevels;
            }else if(closeParens.indexOf(c)!==-1){
                --iLevels;
                if(iLevels < 0){
                    return false;
                }
            }
        }

        return iLevels === 0 ? true : false ;
    }

////////////////////////////

    /*
     * isBalancedV3, recursive with order checking
     * @param {string} c
     * @returns boolean
     */

    var openParens = '({['.split('');
    var closeParens = ')}]'.split('');

    function isBalancedV3(sStatement, parensStack){

        var currentToken;

        parensStack = parensStack || [];

        if(sStatement.length===0){
            return parensStack.length === 0? true : false;
        }

        currentToken = sStatement[0];
        //console.log(c, sStatement, parensStack);//, openParens, closeParens);

        if(openParens.indexOf(currentToken)!==-1){
            // push to stack
            parensStack.push(currentToken);
        }else if((closeParens.indexOf(currentToken)!==-1)
                  &&(closeParens.indexOf(currentToken) === openParens.indexOf(parensStack[parensStack.length-1]))){
            parensStack.pop();
        }

        return isBalancedV3(sStatement.slice(1), parensStack);
    }


    /**
     * testProvider : automate testing
     * @param array arrValues
     * @param function func
     * @returns {Boolean}
     */
    var testProvider = function (arrValues, func){
        var i;

        for (i in arrValues){
            var res = func(arrValues[i][0]);
            if(res!==arrValues[i][1]){
                console.log('Failed:  ' + arrValues[i][0].toString() );
                return false;
            }else{
                console.log('Success: ' +arrValues[i][0].toString());
            }
        }

        return true;
    };

    /**
     * array of [strings and expected result]
     * @type Array
     */
    var testStatements = [

        ['()'                       ,true],
        ['(true?x:y)'               ,true],
        [')('                       ,false],
        ['({1,2,3})'                ,true],
        ['({13)'                    ,false],
        ['({13)}'                   ,false],
        ['if(true){donothing();}'   ,true]

    ];

    console.log('Check if a parens are balanced!');
    console.log(testProvider(testStatements,isBalancedV3)? 'no problems' : 'errors');


}());
