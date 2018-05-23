import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function mapStateToProps (state) {
  return {
    // todo: state.todo,
  }
}

const actions = {
  // myActionName: Action.myActionName,
}

function mapDispatchToProps (dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

@connect(mapStateToProps, mapDispatchToProps)
class Home extends React.Component {
  render () {
    return <h1>Hello, React</h1>
  }
}

export default Home
