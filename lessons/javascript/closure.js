//!-- closures

// sample 1
(function () { console.log('this is a closure') }()); // IIFE

(function () {
  'use strict';

  // sample 2
  var myFunction = function (config) {
    var i = 1;
    this.config = config;
    return {
      get: function () {
        console.log(i++);
      }
    };
  };

  // sample 3
  var myFunction2 = (function () {
    return function () {
      console.log('this is a closure');
    };
  }());

  var mf1 = myFunction({d : 2});
  mf1.get();
  var mf2 = myFunction({d : 3});
  mf2.get();

  var mf3 = myFunction2();
  mf3();

}());

var revealingModuleName = (function () {
  'use strict';

  function methodName() {
    
  }

  return {
    methodName:methodName
  };

}());