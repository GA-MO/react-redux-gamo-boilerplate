import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes, matchRoutes } from 'react-router-config'
import Helmet from 'react-helmet'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import configureStore from '../app/store/configureStore'
import routes from '../app/routes'

const renderFullPage = (html, initialState) => {
  const head = Helmet.rewind()
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${head.title.toString()}
        <link rel="stylesheet" type="text/css" href="/style.css?v=${Date.now()}">
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}; 
        </script>
        <script async src="/polyfill.js?v=${Date.now()}"></script>
        <script async src="/vendor.js?v=${Date.now()}"></script>
        <script async src="/bundle.js?v=${Date.now()}"></script>
      </body>
    </html>
  `
}

export default (req, res) => {
  const memoryHistory = createMemoryHistory()
  const store = configureStore(memoryHistory)
  const branch = matchRoutes(routes, req.url)
  const promises = branch.map(({ route }) => {
    let fetchData = route.component.fetchData
    return fetchData instanceof Function
      ? fetchData(store)
      : Promise.resolve(null)
  })

  return Promise.all(promises).then(data => {
    let context = {}
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    )

    if (context.status === 404) {
      res.status(404)
    }

    if (context.status === 302) {
      return res.redirect(302, context.url)
    }

    const initialState = store.getState()
    res.status(200).send(renderFullPage(content, initialState))
  })
}
