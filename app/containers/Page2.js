import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from 'actions/action'

// State
function mapStateToProps(state) {
  return {
    // myState: state.myState,
  }
}

// Action
const actions = {
  goToPage: Action.goToPage,
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Page2 extends React.Component {
  static propTypes = {
    // name: React.PropTypes.string,
  };

  render() {
    console.log('PAGE2', this.props);
    return (
      <div className="text-center">
        <h1>Page2</h1>
        <a href="javascript:;" onClick={() => this.props.actions.goToPage('style-guide')} className="btn btn-default">Go Page3</a>
      </div>
    );
  }
}

