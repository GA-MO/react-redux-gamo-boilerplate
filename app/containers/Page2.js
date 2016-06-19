import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/action'

class Page2 extends React.Component {
  static propTypes = {
    // name: React.PropTypes.string,
  };

  render() {
    return (
      <div className="text-center">
        <h1>Page2</h1>
      </div>
    );
  }
}

// State
function mapStateToProps(state) {
  return {
    // myState: state.myState,
  }
}

// Action
const actions = {
  // myActionName: Action.myActionName,
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Page2)
