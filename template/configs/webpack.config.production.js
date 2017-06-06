
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var projectPath = require('./path')

var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
      BUILD_ENV: JSON.stringify(`${process.env.BUILD_ENV}`)
    }
  }),
  new webpack.ProvidePlugin({
    React: 'react',
    _: 'lodash'
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    },
    minimize: true
  }),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new ExtractTextPlugin({
    filename: 'css/style.css',
    disable: false,
    allChunks: false
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    path: projectPath.build,
    filename: 'js/[name].js'
  })
]

if (process.env.BUILD_ENV === 'client') {
  plugins.push(
    new HtmlWebpackPlugin({
      inject: true,
      template: projectPath.htmlTemplate,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  )
}

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      'babel-polyfill',
      projectPath.indexFile
    ],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux'
    ]
  },

  output: {
    path: projectPath.build,
    publicPath: '',
    filename: 'js/bundle.js'
  },

  plugins: plugins,

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
          publicPath: ''
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          publicPath: ''
        })
      },
      {
        test: /\.(woff2?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=1000&name=fonts/[name].[ext]'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=1000&name=img/[name].[ext]'
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['.js', '.jsx', '.json']
  }
}
