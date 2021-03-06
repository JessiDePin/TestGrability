const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  devServer: {
    // only for testing
    disableHostCheck: true,
    inline: true,
    contentBase: './src',
    port: 3000
  },
  devtool: 'cheap-module-eval-source-map',
  entry: './dev/js/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  output: {
    path: 'src',
    filename: 'js/bundle.min.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new DashboardPlugin()
    /*
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin()
    */
  ]
};
