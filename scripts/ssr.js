import React from 'react'
import { renderToString } from 'react-dom/server'
import { RouterContext, match } from 'react-router'
import Helmet from 'react-helmet'
import createMemoryHistory from 'react-router/lib/createMemoryHistory'
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
        <link rel="stylesheet" type="text/css" href="/style.css">
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}; 
        </script>
        <script src="/vendor.js?v=${Date.now()}"></script>
        <script src="/bundle.js?v=${Date.now()}"></script>
      </body>
    </html>
  `
}

const fetchComponent = (dispatch, components, params) => {
  const needs = components
    .filter(component => component)
    .reduce((prev, current) => {
      const wrappedComponent = current.WrappedComponent

      return (current.need || [])
        .concat((wrappedComponent && wrappedComponent.need) || [])
        .concat(prev)
    }, [])

  return Promise.all(needs.map(need => dispatch(need(params))))
}

export default (req, res) => {
  const memoryHistory = createMemoryHistory(req.url)
  const store = configureStore(memoryHistory)

  match(
    { routes, location: req.url },
    (error, redirectLocation, renderProps) => {
      // Error internal server
      if (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
      } else if (redirectLocation) {
        res.redirect(
          302,
          `${redirectLocation.pathname}${redirectLocation.search}`
        )
      } else if (renderProps) {
        const { components, params } = renderProps
        fetchComponent(store.dispatch, components, params)
          .then(() => {
            const componentHTML = renderToString(
              <Provider store={store} key='provider'>
                <RouterContext {...renderProps} />
              </Provider>
            )
            const initialState = store.getState()
            res.status(200).send(renderFullPage(componentHTML, initialState))
          })
          .catch(err => {
            console.log(err)
            res.status(500).send('Internal Server Error')
          })
      } else {
        res.status(404).send('Not found')
      }
    }
  )
}
