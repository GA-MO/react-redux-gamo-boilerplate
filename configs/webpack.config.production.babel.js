import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin'
import IsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin'
import IsomophicTools from './webpack-isomorphic-tools'
import projectPath from './path'

const isomorphicToolsPlugin = new IsomorphicToolsPlugin(IsomophicTools)

const entry = () => ({
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
})

const output = () => ({
  path: projectPath.build,
  publicPath: '',
  filename: 'bundle.js',
  chunkFilename: '[name].js'
})

const optimization = () => ({
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
})

const plugins = () => {
  let webpackPlugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        BUILD_ENV: JSON.stringify(`${process.env.BUILD_ENV}`)
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    isomorphicToolsPlugin
  ]

  if (process.env.BUILD_ENV === 'client') {
    const htmlPlugins = [
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
      }),
      new ScriptExtHtmlWebpackPlugin({
        preload: /\.js$/,
        defaultAttribute: 'async'
      })
    ]
    webpackPlugins = [ ...webpackPlugins, ...htmlPlugins ]
  }

  return webpackPlugins
}

const modules = () => ({
  rules: [
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
    },
    {
      test: /\.scss$/,
      use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
    },
    {
      test: /\.(woff2?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=1000&name=fonts/[name].[ext]'
    },
    {
      test: isomorphicToolsPlugin.regularExpression('images'),
      loader: 'url-loader?limit=1000&name=img/[name].[ext]'
    }
  ]
})

const resolve = () => ({
  modules: [ 'node_modules', 'app' ],
  extensions: [ '.js', '.jsx', '.json' ]
})

export default {
  mode: 'production',
  performance: { hints: false },
  entry: entry(),
  output: output(),
  optimization: optimization(),
  plugins: plugins(),
  module: modules(),
  resolve: resolve()
}
