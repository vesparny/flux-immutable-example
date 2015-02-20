'use strict';

module.exports = {
  devtool: 'eval',
  entry: [
    './src/client.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  externals:[{
    xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
  }],
  watch: true,
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
