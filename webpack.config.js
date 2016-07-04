var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x){
    return ['.bin'].indexOf(x) === -1;    //leave binaries
  })
  .forEach(function(mod){
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry : {
    server : path.join(__dirname, './src/server/index.js')
  },
  target : 'node',
  output : {
    path : path.join(__dirname,'build'),
    filename : 'backend.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        exclude : /node_modules/,
        loader : "babel"
      }
    ]
  },
  externals : nodeModules,
  plugins : [
    new webpack.IgnorePlugin(/\.(css|less)$/),
    new webpack.BannerPlugin('require("source-map-support").install();',{
      raw : true,
      entryOnly : false
    })
  ]
};