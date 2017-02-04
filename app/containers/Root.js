import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

import configureStore from '../store/configureStore'
import routes from '../routes'

export default class Root extends Component {
  render() {
    const initialState = window.__INITIAL_STATE__;
    let history;
    if (process.env.BUILD_ENV === 'client') {
      history = useRouterHistory(createHashHistory)({ queryKey: false });
    } else {
      history = browserHistory;
    }
    const store = configureStore(initialState, history);
    return (
      <Provider store={store} key="provider">
        <Router history={history} routes={routes} />
      </Provider>
    )
  }
}
