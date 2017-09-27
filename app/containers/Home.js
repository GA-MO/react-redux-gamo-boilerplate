import React from 'react'
import PropTypes from 'prop-types'
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
    // name: PropTypes.string,
  };

  render() {
    return (
      <div className='_center'>
        <br />
        <h1>Hello, I am React</h1>
      </div>
    )
  }
}
