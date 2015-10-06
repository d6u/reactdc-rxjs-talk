'use strict';

var webpack = require('webpack');

var prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({minimize: true}),
];

module.exports = {
  entry: './slides/js/index.js',

  output: {
    filename: 'bundle.js',
    path: './public',
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?modules!autoprefixer-loader!sass-loader'
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?optional[]=es7.functionBind'
      }
    ]
  },

  plugins: process.env.NODE_ENV === 'production' ? prodPlugins : null,
};
