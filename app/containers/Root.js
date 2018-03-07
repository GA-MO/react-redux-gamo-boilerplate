import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { renderRoutes } from 'react-router-config'
import { createHashHistory, createBrowserHistory } from 'history'
import configureStore from '../store/configureStore'
import routes from '../routes'

/* Get initialstate */
const initialState = window.__INITIAL_STATE__
const isBuildClient = process.env.BUILD_ENV === 'client'
const history = isBuildClient ? createHashHistory() : createBrowserHistory()
const store = configureStore(initialState, history)

export default hot(module)(() => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {renderRoutes(routes)}
      </ConnectedRouter>
    </Provider>
  )
})
