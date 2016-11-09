// import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';

export const ACTION = () => {
  return {
    type: 'CONST_ACTION',
    data: 'ACTION',
  }
}

export const ACTION_2 = () => {
  return (dispatch) => {
    dispatch({
      type: 'CONST_ACTION',
      data: 'ACTION',
    })
  }
}

export const API_GET = () => {
  return {
    type: 'CONST_API_GET',
    request: {
      pathURL: '/users/all',
    },
  }
}

export const API_GET_CALLBACK = () => {
  return {
    request: {
      pathURL: '/users/all',
    },
    callback: (dispatch, getState, data) => {

    },
  }
}

export const API_POST = () => {
  return {
    request: {
      pathURL: '/users/all',
      options: {
        method: 'POST',
        headers: {},
        body: {},
      },
    },
  }
}

export const API_POST_CALLBACK = () => {
  return {
    type: 'CONST_API_POST',
    request: {
      pathURL: '/users/all',
      options: {
        method: 'POST',
        headers: {},
        body: {},
      },
    },
    callback: (dispatch, getState, data) => {

    },
  }
}


export const callApi = (path, dispatch, func) => {
  return dispatch({
    request: {
      pathURL: path,
    },
    callback: (dispatch, getState, data) => {
      return func(data)
    },
  })
}

export const getUser = () => {
  return (dispatch) => {
    const path = '/wing/public/api/market-price/latest';
    callApi(path, dispatch, (data) => {
      dispatch({
        type: 'TEST',
        data,
      })
    })
  }
}

export const goToPage = (path) => {
  return dispatch => dispatch(push(`/${path}`))
}