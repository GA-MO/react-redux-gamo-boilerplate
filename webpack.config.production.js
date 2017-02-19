var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      'babel-polyfill',
      './app/index.js',
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
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        BUILD_ENV: JSON.stringify(`${process.env.BUILD_ENV}`),
      },
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      _: 'lodash',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
      minimize: true,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: false,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      path: path.join(__dirname, 'static'),
      filename: '[name].js',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
          publicPath: '/static',
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
          publicPath: '/static',
        }),
      },
      {
        test: /\.(woff2?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=100000&name=fonts/[name].[ext]',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=10000&name=img/[name].[ext]',
      },
    ],
  },
  resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['.js', '.jsx', '.json'],
  },
}
