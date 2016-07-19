import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/action'

class Home extends React.Component {
  static propTypes = {
    // name: React.PropTypes.string,
  };

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <div className="row">
            <div className="D-6">
              <div className="text-left">
                <h2>GAMO Boilerplate</h2>
                <p>This is react starter boilerplate for client</p>
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
                  $ npm start
                </code></pre>
                <h4>Build to production</h4>
                <pre><code>
                  $ npm run build<br />
                  ../dist/<br />
                  ../app.html
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
