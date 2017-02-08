import express from 'express'
// import httpProxy from 'http-proxy'
import ssr from './ssr'
import config from '../configs'

const app = express()

app.use('/static', express.static('static'));
app.use(ssr)


app.set('port', (process.env.PORT || config.port));
const PORT = app.get('port');


app.listen(PORT, error => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> Listening on port ${PORT}.`)
  }
})
