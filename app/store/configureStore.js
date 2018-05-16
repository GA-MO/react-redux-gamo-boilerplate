import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

export default (initialState, history) => {
  const middlewares = [ thunk, routerMiddleware(history) ]

  if (process.env.NODE_ENV !== 'production') middlewares.push(createLogger())

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
