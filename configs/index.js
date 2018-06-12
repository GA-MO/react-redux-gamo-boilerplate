export default {
  development: {
    host: '',
    port: 3000
  },
  production: {
    host: 'http://yourserver.com',
    port: 3001
  }
}[process.env.NODE_ENV || 'development']
