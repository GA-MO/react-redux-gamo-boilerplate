import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
// CSS
import './css/style.scss'

const rootEl = document.getElementById('app')

render(<Root />, rootEl)
