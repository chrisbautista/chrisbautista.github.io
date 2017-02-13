# Up and Running with ECMAScript 6

## History and Overview
- Ecmascript 6 compatibility
## Transpiling ES6
- babel
- in browser Babel Transpiling
   - cdnjs
- Transpiling with Babel and babel-node
- babel-node
   - for node js apps
- Transpiling with Webpack
   - bundler
   - automated transpiling
   - ``` npm instal --save-dev babel-loader ```
   - bundle.js
```json
  module.exports = {
	entry: './script.js',
	output: {filename: 'bundle.js'},
	module: {
		loaders: [
        {test: /\.js?/, loader: 'babel-loader', exclude: /node_modules/}
      ]
    }
  };
```
   



