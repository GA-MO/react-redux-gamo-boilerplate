var path = require('path');

function resolvePath(pathName) {
  return path.resolve(process.cwd(), pathName)
}

module.exports = {
  build: resolvePath('build'),
  public: resolvePath('public'),
  htmlTemplate: resolvePath('public/index.html'),
  src: resolvePath('app'),
  indexFile: resolvePath('app/index.js'),
  nodeModule: resolvePath('node_modules'),
}
