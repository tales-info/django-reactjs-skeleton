var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  context: __dirname,

  entry: './assets/js/index', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

  output: {
      path: path.resolve('./assets/dist/'),
      filename: "[hash]/[name]-script.js",
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new ExtractTextPlugin('[hash]/[name]-stylesheet.css'),
    //new UglifyJsPlugin(),
  ],

  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader'}, // to transform JSX into JS
      { test: /\.css$/i, use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})},
      { test: /\.scss$/, exclude: /node_modules/, use: ExtractTextPlugin.extract({use: ['css-loader', 'sass-loader']})},
    ]
  },

  resolve: {
    modules: ['node_modules', 'bower_components'],
    extensions: ['.js', '.jsx']
  },
}
