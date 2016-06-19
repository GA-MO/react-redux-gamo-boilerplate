var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
      minimize: true
    }),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css'),
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: [ 'babel-loader' ], exclude: /node_modules/, include: __dirname },
      { test: /\.css$/, loader: ExtractTextPlugin.extract(['css','sass?outputStyle=compressed']) },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract(['css','sass?outputStyle=compressed']) },
      { test: /\.(woff2?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000' },
    ]
  },
  resolve: {
      extensions: ['', '.react.js', '.js', '.jsx'],
      alias: {
        'ie' : 'component-ie'
      }
  }
}
