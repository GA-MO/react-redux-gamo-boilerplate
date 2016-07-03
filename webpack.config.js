var webpack = require('webpack')
var path = require('path')

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './app/index.js' // Your appʼs entry point
  ],
  output: {
    publicPath: '/static/',
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: [ 'babel-loader' ], exclude: /node_modules/, include: __dirname },
      { test: /\.scss$/, loader: 'style!css?sourceMap!sass?sourceMap&sourceComments' },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader?sourceMap'] },
      { test: /\.(woff2?|ttf|eot|svg|jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader' },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    noInfo: false,
    compress: true,
    stats: { 
      assets: true,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
    },
    quiet: false,
    inline: false,
  }
}
