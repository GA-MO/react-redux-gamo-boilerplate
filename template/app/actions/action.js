import { push } from 'react-router-redux'

export const ACTION = () => ({
  type: 'CONST_ACTION',
  data: 'ACTION'
})

export const ACTION_2 = () => dispatch => dispatch({
  type: 'CONST_ACTION',
  data: 'ACTION'
})

export const API_GET = () => ({
  type: 'CONST_API_GET',
  request: {
    pathURL: ''
  }
})

export const API_GET_CALLBACK = () => ({
  request: {
    pathURL: ''
  },
  callback: (data, dispatch, getState) => {

  }
})

export const API_POST = () => ({
  request: {
    pathURL: '',
    options: {
      method: 'POST',
      headers: {},
      body: {}
    }
  }
})

export const API_POST_CALLBACK = () => ({
  type: 'CONST_API_POST',
  request: {
    pathURL: '',
    options: {
      method: 'POST',
      headers: {},
      body: {}
    }
  },
  callback: (data, dispatch, getState) => {

  }
})

export const goToPage = path => dispatch => dispatch(push(`/${path}`))
