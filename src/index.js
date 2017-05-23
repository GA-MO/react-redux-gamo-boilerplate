#!/usr/bin/env node

const chalk = require('chalk')
const path = require('path')
const fs = require('fs-extra')
const execSync = require('child_process').execSync
const spawn = require('cross-spawn')

const args = process.argv
const commandName = 'new-react-app'
const projectName = args[2]
const useYarn = shouldUseYarn()

if (projectName) {
  const root = path.resolve(projectName)
	createProject(projectName, root)
	.then(() => {
		copyTemplateToProject(root)
	})
} else {
	console.log()
  console.log()
  console.log(
    `Please enter a name of your project directory:  ${chalk.green(commandName)} ${chalk.red('<project-directory>')}`
  )
  console.log()
  console.log()
  process.exit(0)
}

function createProject(name, root) {
	return new Promise((resolve, reject) => {
		console.log()
	  console.log(`Creating a new project in ${chalk.cyan(root)}`)
	  console.log()

	  fs.mkdir(name, (fsError) => {
		  if (fsError && fsError.code === 'EEXIST') {
		    console.log()
			  console.log(
		      `The directory ${chalk.red(name)} contains files that could conflict.`
		    )
		    console.log('Try using a new directory name.')
		    console.log()
		    console.log()
		    process.exit(1)
		  } else {
		  	resolve()
		  }
		})
	})
}

function copyTemplateToProject(root) {
	// Copy template file to root directory
  fs.copySync(`${__dirname}/../template`, root)

  process.chdir(root)

  console.log('Installing packages. This might take a couple minutes.')
  // Install all package from the template
  installProject(useYarn).then(() => {
  	printSuccessLog(projectName, root, useYarn)
  })
}

function shouldUseYarn() {
  try {
    execSync('yarnpkg --version', { stdio: 'ignore' })
    return true
  } catch (e) {
    return false
  }
}

function installProject() {
	return new Promise((resolve, reject) => {
		let command
    let args

		if (useYarn) {
			command = 'yarnpkg'
		} else {
			command = 'npm'
			args = ['install']
		}

		const child = spawn(command, args, { stdio: 'inherit' })
		child.on('close', code => {
      if (code !== 0) {
        reject({
          command: `${command} ${args.join(' ')}`,
        })
        return
      }
      resolve()
    })
	})
}

function printSuccessLog(appName, useYarn) {

	const displayedCommand = useYarn ? 'yarn' : 'npm run'

	console.log()
	console.log()
  console.log(chalk.green(`Success! Created project ${chalk.cyan(appName)}`))
  console.log()
  console.log()
  console.log('You can run these commands in the project:')
  console.log('-------------------------------------------')
  console.log(`| ${chalk.cyan(`cd ${appName}`)} : Go to project directory.`)
  console.log(`| ${chalk.cyan(`${displayedCommand} dev`)} : Starts the development server.`)
  console.log(`| ${chalk.cyan(`${displayedCommand} build:client`)} : (Client side) Bundles files for production.`)
  console.log(`| ${chalk.cyan(`${displayedCommand} build`)} : (Server side) Bundles files for production.`)
  console.log(`| ${chalk.cyan(`${displayedCommand} start`)} : Starts the production server.`)
  console.log(`| ${chalk.cyan(`${displayedCommand} test`)} : Starts the test runner.`)
  console.log('-------------------------------------------')
  console.log()
  console.log()
}
