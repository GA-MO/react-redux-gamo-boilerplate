import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'
import Helmet from 'react-helmet'

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Helmet title='React Redux boilerplate' />
        <header className='main-header'>
          <nav>
            <ul className='navigation'>
              <li>
                <NavLink activeClassName='active' exact to='/'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to='/page1'>
                  Page1
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to='/page2'>
                  Page2
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {renderRoutes(this.props.route.routes)}
      </React.Fragment>
    )
  }
}

export default App
