import path from 'path'

const resolvePath = (pathName) => path.resolve(process.cwd(), pathName)

export default {
  build: resolvePath('build'),
  public: resolvePath('public'),
  htmlIndex: resolvePath('public/index.html'),
  htmlTemplate: resolvePath('public/template.html'),
  src: resolvePath('app'),
  indexFile: resolvePath('app/index.js'),
  nodeModule: resolvePath('node_modules')
}
