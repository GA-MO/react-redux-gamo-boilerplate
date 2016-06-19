import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './containers/Root'
// CSS
import '../css/style.scss'

const rootEl = document.getElementById('app')

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRootApp = require('./containers/Root').default

    render(
      <AppContainer>
         <NextRootApp />
      </AppContainer>,
      rootEl
    );
  });
}
