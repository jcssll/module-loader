//sample from https://gist.github.com/learncodeacademy/25092d8f1daf5e4a6fd3

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
// there is no src folder
////entry:this is where we are starting off
module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/scripts.js", 
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};