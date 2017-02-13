# Essential React JS

## Chapter 2
- Babel
- Webpack
? typescript
? arrow function

## Chapter 3

- Planning
- Creating Components with CreateClass
- Adding Component Properties
- Adding Component Methods
- Creating components with ES6 class syntax
- Creating stateless functional components
- Adding react-icons
    - material design
    - fontawesome
    - google and many more
    
 ## Chapter 4
 
 - Composing Components
 - Displaying Child components
     - parameter.map(item, i)
     - ? spread operator (...item)
 - Default Props
     - createClass
     - ES6
     - functional
 - Validating with React.PropTypes
     - define by
         - createClass
         - es6
         - stateless
     - documents the properties
     - validates
         - type
         - isRequired?
     - ! not a requirement but helps debugging
 - Custom Validation
     - !instanceOf(Date)
 - Working with State
 - Passing state as props
 - State with ES6 Class
     ? state
     ? super 
 # Using the React Router
 - Incorporating the router
    - 
 - Setting up routes
    - this.props.location.pathname
 - Navigating with the link component
    - menu.js
    - import { Link } from 'react-router'
 - Using route parameters
    - this.props.params
    - ":filter"
 - Nesting Routes
    - page template
    - can define a single path for multiple components
    - 
 -Forms and Refs
    - creating a form component
        - ``` import { PropTypes } from 'react' ```
        - htmlFor
        - ? destructuring
    - using refs in class components
        - onSubmit={this.submit}
    - using refs in stateless components
        - ref={input => _powder = input}
 - Two-way function binding
    - this.setState({})
 - Adding an autocomplete component
    - from a list
    - <datalist></datalist>
    - get value() { return this.refs.inputResort.value } 
    - set value(inputValue) { this.refs.inputResort.value = inputValue }
## Chapter 7 The Component Lifecycle
 - Challenge: Building Member Component
 - Challenge: Building MemberList Component
 - Understanding the mounting lifecycle
     - api.randomuser.me
     - loading: false
     - !componentDidMount
         - fetch(Promise)
     - !componentWillMount
         - before initial render
         
 - Understanding the updating lifecycle
     - ?.some()
     - componentWillUpdate
         - nextProps
     - sholdComponentUpdate
     
 





