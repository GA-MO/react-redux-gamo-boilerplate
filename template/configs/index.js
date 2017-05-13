module.exports = {
  development: {
    isProduction: false,
    host: 'localhost',
    port: 3000,
  },
  production: {
    isProduction: true,
    host: 'http://yourserver.com', // use localhost to test in local machine
    port: 3000,
  },
}[process.env.NODE_ENV || 'development'];
