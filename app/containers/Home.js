import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// State
function mapStateToProps(state) {
  return {
    // todo: state.todo,
  }
}

// Action
const actions = {
  // myActionName: Action.myActionName,
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends React.Component {
  static propTypes = {
    // name: React.PropTypes.string,
  };

  render() {
    return (
      <div className="container">
        <div className="_center">
          <div className="row">
            <div className="D-7">
              <div className="_left">
                <h2>GAMO Boilerplate</h2>
                <p>React starter boilerplate for client and server rendering (Univarsal)</p>
                <h4>Features</h4>
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Redux form</li>
                  <li>React Router</li>
                  <li>Hot reload</li>
                  <li>Sass</li>
                  <li>Mocha</li>
                </ul>
                <h4>Getting Started</h4>
                <pre><code>
                  $ cd react-redux-gamo-boilerplate<br />
                  $ npm install<br />
                  $ npm run dev
                </code></pre>
                <h4>Client: Build to production</h4>
                <pre><code>
                  $ npm run build:client<br />
                  ../static/<br />
                  ../app.html
                </code></pre>
                <h4>Server Rendering: Build to production</h4>
                <pre><code>
                  $ npm run build<br />
                  $ npm run start
                </code></pre>
                <h4>Testing</h4>
                <pre><code>
                  $ npm test
                </code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
