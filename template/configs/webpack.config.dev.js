
var webpack = require('webpack')
var projectPath = require('./path')

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    projectPath.indexFile
  ],
  output: {
    path: projectPath.public,
    publicPath: '',
    filename: 'js/bundle.js'
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      _: 'lodash'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(`${process.env.NODE_ENV}`),
        BUILD_ENV: JSON.stringify(`${process.env.BUILD_ENV}`)
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(woff2?|ttf|eot|svg|jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['.js', '.jsx', '.json']
  }
}
