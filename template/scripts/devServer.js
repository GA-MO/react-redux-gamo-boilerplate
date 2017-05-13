
var express = require('express');
var app = express();
var chalk = require('chalk');
var formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
var clearConsole = require('react-dev-utils/clearConsole');
var openBrowser = require('react-dev-utils/openBrowser');
var webpack = require('webpack');
var webpackConfig = require('../configs/webpack.config.dev');
var projectPath = require('../configs/path');
var config = require('../configs');

var protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
var host = process.env.HOST || 'localhost';
var port = config.port;
var isFirstCompile = true;

var compiler = webpack(webpackConfig);

compiler.plugin('invalid', function() {
  clearConsole();
  console.log(chalk.yellow('Compiling...'));
});

compiler.plugin('done', function(stats) {
  var messages = formatWebpackMessages(stats.toJson({}, true));
  var isSuccessful = !messages.errors.length && !messages.warnings.length;
  var showInstructions = isSuccessful && isFirstCompile;

  clearConsole();

  if (isSuccessful) {
    console.log();
    console.log('   ' + chalk.green.bold('══════════════════════'));
    console.log();
    console.log('   ' + chalk.green.bold('Compiled successfully!'));
    console.log();
    console.log('   ' + chalk.green.bold('══════════════════════'));
  }

  if (showInstructions) {
    console.log();
    console.log('   The project is running at:');
    console.log();
    console.log('   ' + chalk.cyan.bold(protocol + '://' + host + ':' + port + '/'));
    console.log();
    openBrowser(protocol + '://' + host + ':' + port + '/');
    isFirstCompile = false;
  }

  // If errors exist, only show errors.
  if (messages.errors.length) {
    console.log(chalk.red('Failed to compile.'));
    console.log();
    messages.errors.forEach((message) => {
      console.log(message);
      console.log();
    });
  }
})

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  noInfo: true,
  compress: true,
  stats: {
    assets: true,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
  },
  quiet: true,
  inline: false,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(projectPath.htmlIndex);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  clearConsole();
  console.log();
  console.log('   ' + chalk.cyan.bold('══════════════════════════════════'));
  console.log();
  console.log('   ' + chalk.cyan.bold('Starting the development server...'));
  console.log();
  console.log('   ' + chalk.cyan.bold('══════════════════════════════════'));
  console.log();
});
