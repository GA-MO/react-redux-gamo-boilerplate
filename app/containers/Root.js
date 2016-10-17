import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history';

import configureStore from 'store/configureStore'
import routes from '../routes'

export default class Root extends Component {
  render() {
    const history = useRouterHistory(createHashHistory)({ queryKey: false });
    let store;
    let router;
    if (process.env.NODE_ENV !== 'production') {
      store = configureStore(browserHistory);
      router = <Router history={browserHistory} routes={routes} />;
    } else {
      store = configureStore(history);
      router = <Router history={history} routes={routes} />;
    }
    return (
      <Provider store={store} key="provider">
        {router}
      </Provider>
    )
  }
}
