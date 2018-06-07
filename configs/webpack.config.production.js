const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const projectPath = require('./path')
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(
  require('./webpack-isomorphic-tools')
)

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
      BUILD_ENV: JSON.stringify(`${process.env.BUILD_ENV}`)
    }
  }),
  new ExtractTextPlugin({
    filename: 'style.css',
    allChunks: true
  }),
  webpackIsomorphicToolsPlugin
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
  mode: 'production',
  performance: { hints: false },
  entry: {
    polyfill: [ 'babel-polyfill' ],
    vendor: [
      'history',
      'react',
      'react-helmet',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'react-router-config',
      'react-router-redux',
      'redux',
      'redux-thunk'
    ],
    app: projectPath.indexFile
  },

  output: {
    path: projectPath.build,
    publicPath: '',
    filename: 'bundle.js',
    chunkFilename: '[name].js'
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        polyfill: {
          chunks: 'initial',
          test: 'polyfill',
          name: 'polyfill',
          enforce: true
        },
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
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
          use: 'css-loader'
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
          ]
        })
      },
      {
        test: /\.(woff2?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=1000&name=fonts/[name].[ext]'
      },
      {
        test: webpackIsomorphicToolsPlugin.regularExpression('images'),
        loader: 'url-loader?limit=1000&name=img/[name].[ext]'
      }
    ]
  },
  resolve: {
    modules: [ 'node_modules', 'app' ],
    extensions: [ '.js', '.jsx', '.json' ]
  }
}
