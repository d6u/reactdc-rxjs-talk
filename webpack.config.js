'use strict';

module.exports = {
  entry: './src/js/index.js',

  output: {
    filename: 'bundle.js',
    path: './src',
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
  }
};
