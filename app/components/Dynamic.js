import React from 'react'

export default class Dynamic extends React.PureComponent {
  state = {
    Component: null
  }

  componentDidMount () {
    if (!this.state.Component) {
      this.props
        .moduleProvider()
        .then((c) => {
          this.setState({ Component: c.default })
        })
    }
  }

  render () {
    const { Component } = this.state

    return <div>{Component ? <Component /> : 'Loading'}</div>
  }
}
