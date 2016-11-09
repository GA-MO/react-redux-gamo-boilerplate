var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // devtool: 'source-map',
  // entry: './app/index.js',
  entry: {
    app: [
      path.join(__dirname, 'app/index.js'),
    ],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
    ],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
      $: 'jquery',
      _: 'lodash',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
      minimize: true,
    }),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
    }),
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel-loader'], exclude: /node_modules/, include: __dirname },
      { test: /\.css$/, loader: ExtractTextPlugin.extract(['css', 'sass?outputStyle=compressed']) },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract(['css', 'sass?outputStyle=compressed']) },
      { test: /\.(woff2?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=100000&name=fonts/[name].[ext]' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=10000&name=img/[name].[ext]' },
    ],
  },
  resolve: {
    modulesDirectories: ['app', 'src', 'node_modules'],
    extensions: ['', '.js', '.jsx', '.json'],
  },
}
