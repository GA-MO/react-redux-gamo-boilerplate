import React from 'react'
import { Dynamic } from './components'
import App from './containers/App'

const Home = () => import(/* webpackChunkName: "home", webpackPrefetch: true */ './containers/Home')
const Page1 = () => import(/* webpackChunkName: "page1", webpackPrefetch: true */ './containers/Page1')
const Page2 = () => import(/* webpackChunkName: "page2", webpackPrefetch: true */ './containers/Page2')

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: () => <Dynamic moduleProvider={Home} />
      },
      {
        path: '/page1',
        component: () => <Dynamic moduleProvider={Page1} />
      },
      {
        path: '/page2',
        component: () => <Dynamic moduleProvider={Page2} />
      }
    ]
  }
]

export default routes
