import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

import configureStore from 'store/configureStore'
import routes from '../routes'

export default class Root extends Component {
  render() {
    const history = useRouterHistory(createHashHistory)({ queryKey: false });
    const store = configureStore(history);
    return (
      <Provider store={store} key="provider">
        <Router history={history} routes={routes} />
      </Provider>
    )
  }
}
