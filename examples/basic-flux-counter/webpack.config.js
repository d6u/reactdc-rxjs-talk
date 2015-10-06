'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './js.js',

  output: {
    filename: 'bundle.js',
    path: './',
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?optional[]=es7.functionBind'
      }
    ]
  },
};
