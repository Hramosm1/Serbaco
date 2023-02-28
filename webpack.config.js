const path = require('path');
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },

};