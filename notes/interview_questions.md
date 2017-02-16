# Interview Questions

## Javascript
- What does the this keyword do/represent?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
> A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.

> In most cases, the value of this is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the bind method to set the value of a function's this regardless of how it's called, and ES6 introduced arrow functions whose this is lexically scoped (it is set to the this value of the enclosing execution context).

- What are the peculiarities of scoping in Javascript? What is scoping in ES6?
https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/

- What is prototype inheritance? 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

When it comes to inheritance, JavaScript only has one construct: objects. Each object has an internal link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

    * Difference from classical inheritance?
    https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9#.xk74hshk3
    
    > Classes inherit from classes and create subclass relationships: hierarchical class taxonomies.
   
   > A prototype is a working object instance. Objects inherit directly from other objects.
   
- What is ES6(ES2015)?
   https://medium.com/javascript-scene/how-to-learn-es6-47d9a1ac2620#.rryz8gs44

- What is a promise?
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261#.sgdhex4p4
> A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

- Callback vs Promise
They are basically the same. 
Callbacks are a fundamental way of using functions in Javascript. Promise is a new feature in Javascript that produces and object that may produce a value in the future. Callbacks is easy to use and get horribly wrong.  

- AngularJS vs React?
- MVC vs MVVM
- setTimeout and setInterval? timing? runs before or after duration?

### Reasons for delays longer than specified

There are a number of reasons why a timeout may take longer to fire than anticipated. This section describes the most common reasons.

#### Nested timeouts forced to >=4ms

Historically browsers implement setTimeout() "clamping": successive setTimeout() calls with delay smaller than the "minimum delay" limit are forced to use at least the minimum delay. The minimum delay, DOM_MIN_TIMEOUT_VALUE, is 4 ms (stored in a preference in Firefox: dom.min_timeout_value), with a DOM_CLAMP_TIMEOUT_NESTING_LEVEL of 5.

In fact, 4 ms is specified by the HTML5 spec and is consistent across browsers released in 2010 and onward. Prior to (Firefox 5.0 / Thunderbird 5.0 / SeaMonkey 2.2), the minimum timeout value for nested timeouts was 10 ms.

To implement a 0 ms timeout in a modern browser, you can use window.postMessage() as described here.

#### Timeouts in inactive tabs clamped to >=1000ms

To reduce the load (and associated battery usage) from background tabs, timeouts are often clamped to firing no more often than once per second (1000 ms) in inactive tabs.

Firefox implements this behavior since version 5 (see bug 633421, the 1000ms constant can be tweaked through the dom.min_background_timeout_value preference). Chrome implements this behavior since version 11 (crbug.com/66078).

Firefox for Android uses a timeout value of 15 minutes for background tabs since bug 736602 in Firefox 14, and background tabs can also be unloaded entirely.

#### Late timeouts

In addition to "clamping", the timeout can also fire later when the page (or the OS/browser itself) is busy with other tasks



- Datatypes in Javascript?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

The latest ECMAScript standard defines seven data types:

Six data types that are primitives:
Boolean
Null
Undefined
Number
String
Symbol (new in ECMAScript 6)
and Object


- What is a closure

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
To use a closure, simply define a function inside another function and expose it. To expose a function, return it or pass it to another function.
The inner function will have access to the variables in the outer function scope, even after the outer function has returned.

- What is function composing?
Function composition is the process of combining two or more functions to produce a new function. Composing functions together is like snapping together a series of pipes for our data to flow through.

- What is functional programming?

Functional programming (often abbreviated FP) is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects. Functional programming is declarative rather than imperative, and application state flows through pure functions. Contrast with object oriented programming, where application state is usually shared and colocated with methods in objects.

Functional programming is a programming paradigm, meaning that it is a way of thinking about software construction based on some fundamental, defining principles (listed above). Other examples of programming paradigms include object oriented programming and procedural programming

## Modern Javascript
- Spread operator
https://rainsoft.io/how-three-dots-changed-javascript/

- arrow functions
- desctructuring


## CSS
- What does (.,+,>) represent in CSS?
    * What is a sibling selector?
    * What is a child selector?
- What are the possible values for position? explain each

## SASS
- what is ampersand &?
- what are mixins?

## HTML

## Web development
- How do you speed up a page?
    * What things can you do to speed up a page?
- SEO common tasks
    * Javascript
    * HTML
    * CSS
    * Accessibility

## Test Driven Development
- [TDD vs BDD](https://www.youtube.com/watch?v=mT8QDNNhExg)
- [Jasmine](https://jasmine.github.io/)

## AngularJS
- What is angularJS?
- Modules
- Dependency Injection
- Directives
- Decorator

## React

## Redux

## Chrome Dev Tools
- Adding breakpoints
- Watching variables

## Concepts
- Declarative vs Imperative 
- Functional?



