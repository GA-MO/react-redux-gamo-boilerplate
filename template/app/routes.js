import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App, Home, Page1, Page2 } from './containers'
import StyleGuide from './containers/styleGuide/index'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/page1' component={Page1} />
    <Route path='/page2' component={Page2} />
    <Route path='/style-guide' component={StyleGuide} />
  </Route>
)

export default routes
