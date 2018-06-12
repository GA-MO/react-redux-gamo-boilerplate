import 'ignore-styles'
import 'babel-core/register'
import path from 'path'
import IsomorphicToolsPlugin from 'webpack-isomorphic-tools'
import IsomophicTools from '../configs/webpack-isomorphic-tools'
import server from './server'

const projectBasePath = path.resolve(__dirname, '..')

global.webpackIsomorphicTools = new IsomorphicToolsPlugin(
  IsomophicTools
).server(projectBasePath, () => server)
