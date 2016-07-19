var path = require('path');
var webpack = require('webpack');

module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  devtool: 'eval',
  entry: [
    // necessary for hot reloading with IE:
    'eventsource-polyfill',
    'react-hot-loader/patch',
    // listen to code updates emitted by hot middleware:
    'webpack-hot-middleware/client',
    './app/index',
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel-loader'], exclude: /node_modules/, include: __dirname },
      { test: /\.scss$/, loader: 'style!css?sourceMap!sass?sourceMap&sourceComments' },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader?sourceMap'] },
      { test: /\.(woff2?|ttf|eot|svg|jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
