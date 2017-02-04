import express from 'express'
// import httpProxy from 'http-proxy'
import ssr from './ssr'
import config from '../configs'

const PORT = config.port;
const app = express()
// const targetUrl = `http://${config.host}:${config.apiPort}`
// const proxy = httpProxy.createProxyServer({
//   target: targetUrl
// })

// app.use('/api', (req, res) => {
//   proxy.web(req, res, { target: `${targetUrl}/api` });
// })

app.use('/static', express.static('static'));
app.use(ssr)

app.listen(PORT, error => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> Listening on port ${PORT}.`)
  }
})
