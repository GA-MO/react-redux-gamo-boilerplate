import { App, Home, Page1, Page2 } from './containers'

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/page1',
        component: Page1
      },
      {
        path: '/page2',
        component: Page2
      }
    ]
  }
]

export default routes
