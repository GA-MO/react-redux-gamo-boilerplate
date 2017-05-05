
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
import Helmet from 'react-helmet';

const App = (props) => {
  return (
    <div>
      <Helmet title="React Redux boilerplate" />
      <header className="main-header">
        <nav>
          <ul className="navigation">
            <li><Link activeClassName="active" onlyActiveOnIndex={true} to="/">Home</Link></li>
            <li><Link activeClassName="active" to="/page1">Page1</Link></li>
            <li><Link activeClassName="active" to="/page1/noob/kak">Page2</Link></li>
            <li><Link activeClassName="active" to="/style-guide">Style Guide</Link></li>
          </ul>
        </nav>
      </header>
      {props.children}
    </div>
  )
}

export default App
