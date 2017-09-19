#!/usr/bin/env node
'use strict';

var chalk = require('chalk');
var path = require('path');
var fs = require('fs-extra');
var execSync = require('child_process').execSync;
var spawn = require('cross-spawn');

var args = process.argv;
var commandName = 'new-react-app';
var projectName = args[2];
var useYarn = shouldUseYarn();

if (projectName) {
  (function () {
    var root = path.resolve(projectName);
    createProject(projectName, root).then(function () {
      copyTemplateToProject(root);
    });
  })();
} else {
  console.log();
  console.log();
  console.log('Please enter a name of your project directory:  ' + chalk.green(commandName) + ' ' + chalk.red('<project-directory>'));
  console.log();
  console.log();
  process.exit(0);
}

function createProject(name, root) {
  return new Promise(function (resolve, reject) {
    console.log();
    console.log('Creating a new project in ' + chalk.cyan(root));
    console.log();

    fs.mkdir(name, function (fsError) {
      if (fsError && fsError.code === 'EEXIST') {
        console.log();
        console.log('The directory ' + chalk.red(name) + ' contains files that could conflict.');
        console.log('Try using a new directory name.');
        console.log();
        console.log();
        process.exit(1);
      } else {
        resolve();
      }
    });
  });
}

function copyTemplateToProject(root) {
  // Copy template file to root directory
  fs.copySync(__dirname + '/../template', root);

  process.chdir(root);

  console.log('Installing packages. This might take a couple minutes.');
  // Install all package from the template
  installProject(useYarn).then(function () {
    printSuccessLog(projectName, root, useYarn);
  });
}

function shouldUseYarn() {
  try {
    execSync('yarnpkg --version', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

function installProject() {
  return new Promise(function (resolve, reject) {
    var command = undefined;
    var args = undefined;

    if (useYarn) {
      command = 'yarnpkg';
    } else {
      command = 'npm';
      args = ['install'];
    }

    var child = spawn(command, args, { stdio: 'inherit' });
    child.on('close', function (code) {
      if (code !== 0) {
        reject({
          command: command + ' ' + args.join(' ')
        });
        return;
      }
      resolve();
    });
  });
}

function printSuccessLog(appName, useYarn) {

  var displayedCommand = useYarn ? 'yarn' : 'npm run';

  console.log();
  console.log();
  console.log(chalk.green('Success! Created project ' + chalk.cyan(appName)));
  console.log();
  console.log();
  console.log('You can run these commands in the project:');
  console.log('-------------------------------------------');
  console.log('| ' + chalk.cyan('cd ' + appName) + ' : Go to project directory.');
  console.log('| ' + chalk.cyan(displayedCommand + ' dev') + ' : Starts the development server.');
  console.log('| ' + chalk.cyan(displayedCommand + ' build:client') + ' : (Client side) Bundles files for production.');
  console.log('| ' + chalk.cyan(displayedCommand + ' build') + ' : (Server side) Bundles files for production.');
  console.log('| ' + chalk.cyan(displayedCommand + ' start') + ' : Starts the production server.');
  console.log('| ' + chalk.cyan(displayedCommand + ' test') + ' : Starts the test runner.');
  console.log('-------------------------------------------');
  console.log();
  console.log();
}