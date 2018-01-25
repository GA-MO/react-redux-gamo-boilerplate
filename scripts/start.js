const WebpackIsomorphicTools = require('webpack-isomorphic-tools')
const projectBasePath = require('path').resolve(__dirname, '..')

require('ignore-styles')
require('babel-core/register')

global.webpackIsomorphicTools = new WebpackIsomorphicTools(
  require('../configs/webpack-isomorphic-tools')
).server(projectBasePath, () => {
  require('./server')
})
