import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import './style/style.scss'

const rootEl = document.getElementById('app')
render(<Root />, rootEl)
