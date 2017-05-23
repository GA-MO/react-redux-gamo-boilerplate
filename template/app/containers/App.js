
import React, { Component } from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

class App extends Component {
  render() {
    return (
      <div>
        <Helmet title='React Redux boilerplate' />
        <header className='main-header'>
          <nav>
            <ul className='navigation'>
              <li><Link activeClassName='active' onlyActiveOnIndex to='/'>Home</Link></li>
              <li><Link activeClassName='active' to='/page1'>Page1</Link></li>
              <li><Link activeClassName='active' to='/page2'>Page2</Link></li>
              <li><Link activeClassName='active' to='/style-guide'>Style Guide</Link></li>
            </ul>
          </nav>
        </header>
        {this.props.children}
      </div>
    )
  }
}

export default App
