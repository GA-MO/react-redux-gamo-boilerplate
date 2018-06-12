import webpack from 'webpack'
import express from 'express'
import chalk from 'chalk'
import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages'
import clearConsole from 'react-dev-utils/clearConsole'
import openBrowser from 'react-dev-utils/openBrowser'
import { choosePort } from 'react-dev-utils/WebpackDevServerUtils'
import webpackConfig from '../configs/webpack.config.dev.babel'
import projectPath from '../configs/path'
import config from '../configs'

const app = express()

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http'
const HOST = process.env.HOST || 'localhost'
const DEFAULT_PORT = config.port
let isFirstCompile = true

const startDevServer = async () => {
  try {
    const port = await choosePort(HOST, DEFAULT_PORT)
    if (port == null) return

    const compiler = webpack(webpackConfig)

    compiler.plugin('invalid', () => {
      clearConsole()
      console.log(chalk.yellow('Compiling...'))
    })

    compiler.plugin('done', (stats) => {
      const messages = formatWebpackMessages(stats.toJson({}, true))
      const isSuccessful = !messages.errors.length && !messages.warnings.length
      const showInstructions = isSuccessful && isFirstCompile

      clearConsole()

      if (isSuccessful) {
        console.log()
        console.log('   ' + chalk.green.bold('══════════════════════'))
        console.log()
        console.log('   ' + chalk.green.bold('Compiled successfully!'))
        console.log()
        console.log('   ' + chalk.green.bold('══════════════════════'))
      }

      if (showInstructions) {
        console.log()
        console.log('   The project is running at:')
        console.log()
        console.log(
          '   ' + chalk.cyan.bold(protocol + '://' + HOST + ':' + port + '/')
        )
        console.log()
        openBrowser(protocol + '://' + HOST + ':' + port + '/')
        isFirstCompile = false
      }

      // If errors exist, only show errors.
      if (messages.errors.length) {
        console.log(chalk.red('Failed to compile.'))
        console.log()
        messages.errors.forEach((message) => {
          console.log(message)
          console.log()
        })
      }
    })

    app.use(
      require('webpack-dev-middleware')(compiler, {
        publicPath: webpackConfig.output.publicPath
      })
    )

    app.use(require('webpack-hot-middleware')(compiler))

    app.use('/public', express.static('public'))

    app.get('*', (req, res) => {
      res.sendFile(projectPath.htmlIndex)
    })

    app.listen(port, (err) => {
      if (err) {
        console.log(err)
        return
      }

      clearConsole()
      console.log()
      console.log('   ' + chalk.cyan.bold('══════════════════════════════════'))
      console.log()
      console.log('   ' + chalk.cyan.bold('Starting the development server...'))
      console.log()
      console.log('   ' + chalk.cyan.bold('══════════════════════════════════'))
      console.log()
    })
  } catch (error) {
    if (error && error.message) {
      console.log(error.message)
    }
    process.exit(1)
  }
}

startDevServer()
