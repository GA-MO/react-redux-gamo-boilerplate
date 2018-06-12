import webpack from 'webpack'
import projectPath from './path'

const entry = () => [
  'babel-polyfill',
  'react-hot-loader/patch',
  'webpack-hot-middleware/client',
  projectPath.indexFile
]

const output = () => ({
  path: projectPath.public,
  publicPath: '',
  filename: 'bundle.js'
})

const plugins = () => [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(`${process.env.NODE_ENV}`),
      BUILD_ENV: JSON.stringify(`${process.env.BUILD_ENV}`)
    }
  }),
  new webpack.NoEmitOnErrorsPlugin()
]

const modules = () => ({
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
})

const resolve = () => ({
  modules: [ 'node_modules', 'app' ],
  extensions: [ '.js', '.jsx', '.json' ]
})

export default {
  mode: 'development',
  entry: entry(),
  output: output(),
  plugins: plugins(),
  module: modules(),
  resolve: resolve()
}
