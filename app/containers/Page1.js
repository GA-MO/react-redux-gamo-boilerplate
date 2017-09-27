import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Page1 extends Component {
  static propTypes = {
    // fields: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className='_center'>
        <br />
        <h1>Hello, Page1</h1>
      </div>
    )
  }
}
