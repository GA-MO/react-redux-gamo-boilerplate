const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const projectPath = require('./path')

const plugins = [
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
      BUILD_ENV: JSON.stringify(`${process.env.BUILD_ENV}`)
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    },
    minimize: true,
    beautify: false,
    comments: false
  }),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new ExtractTextPlugin({
    filename: 'style.css',
    disable: false,
    allChunks: false
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    path: projectPath.build,
    filename: '[name].js'
  })
]

if (process.env.BUILD_ENV === 'client') {
  plugins.push(
    new HtmlWebpackPlugin({
      inject: true,
      template: projectPath.htmlTemplate,
      hash: true,
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
  devtool: 'cheap-module-source-map',
  entry: {
    app: ['babel-polyfill', projectPath.indexFile],
    vendor: [
      'babel-polyfill',
      'es6-promise',
      'react',
      'react-helmet',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-logger',
      'redux-thunk'
    ]
  },

  output: {
    path: projectPath.build,
    publicPath: '',
    filename: 'bundle.js'
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
              loader: 'sass-loader'
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
