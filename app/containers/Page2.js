import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/action'

function mapStateToProps (state) {
  return {}
}

const actions = {
  goToPage: Action.goToPage
}

function mapDispatchToProps (dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

@connect(mapStateToProps, mapDispatchToProps)
class Page2 extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Page2</h1>
        <button onClick={() => this.props.actions.goToPage('')}>Go Home</button>
      </React.Fragment>
    )
  }
}

export default Page2
