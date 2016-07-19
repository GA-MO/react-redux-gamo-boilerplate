
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

const App = (props) => {
  return (
    <div>
      <header className="main-header">
        <nav>
          <ul className="navigation">
            <li><Link activeClassName="active" onlyActiveOnIndex={true} to="/">Home</Link></li>
            <li><Link activeClassName="active" to="/page1">Page1</Link></li>
            <li><Link activeClassName="active" to="/page2">Page2</Link></li>
            <li><Link activeClassName="active" to="/page3">Page3</Link></li>
          </ul>
        </nav>
      </header>
      {props.children}
    </div>
  )
}

export default App
