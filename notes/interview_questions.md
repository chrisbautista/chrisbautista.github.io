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

> When it comes to inheritance, JavaScript only has one construct: objects. Each object has an internal link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.
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
- AngularJS vs React?
- MVC vs MVVM
- setTimeout and setInterval? timing? runs before or after duration?
- Datatypes in Javascropt?

## Modern Javascript
- Spread operator
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



