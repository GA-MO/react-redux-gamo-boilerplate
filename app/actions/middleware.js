import fetch from 'isomorphic-fetch'
import config from '../../configs'

require('es6-promise').polyfill()

const host = config.host
const apiFail = (response) => {
  if (response.status >= 200 && response.status < 300) return false
  return true
}
/**
 * Fetch API
 * @param  {String} url     path request to service
 * @param  {Object} options headers, body, method
 * @return {Any} response data from service
 */
function fetchApi(url, options) {
  return fetch(url, options)
    .then(response =>
      response.json().then(json => ({ json, response }))
    )
    .then(({ json, response }) => {
      if (apiFail(response)) {
        // const { status, statusText } = response
        // return Promise.reject({
        //   status,
        //   statusText,
        // })
        const error = new Error(response.statusText)
        error.response = response
        throw error
      }
      return json
    })
}

export default (store) => (dispatch) => (action) => {
  /**
   * Check if action is a function return Dispatch and GetState
   * @param  {function} typeof action
   * @return {function}
   */
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  }

  /**
   * If request is undefined will dispatch action
   */
  const { type, request, callback, ...keys } = action
  if (!request) return dispatch(action)

  /**
   * If pathURL in request is undefined will dispatch action
   */
  const { pathURL, options = {} } = request
  if (!pathURL) return dispatch(action)

  /**
   * Dispatch action when start request API
   */
  dispatch({
    type: 'API_REQUEST',
    ...keys
  })

  /**
   * If there are options method are (POST, PUT)
   * @param  {String} options.method
   * @return {Object}
   */
  if (options.method !== 'GET') {
    options.headers = {
      ...options.headers,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
    options.body = JSON.stringify(options.body)
  } else {
    options.method = 'GET'
  }

  /**
   * Call API via fetchApi function
   * @param {String} patch
   * @param {Object} options
   */
  return fetchApi(`${host}${pathURL}`, options)
    .then(

    /**
     * Resolve promise
     * @param  {Any} data
     * @return {Function}
     */
    (responseData) => {
      /**
       * Dispatch action when request API is done
       */
      dispatch({
        type: 'API_DONE'
      })

      /**
       * If response from server there is fault will dispatch action alert
       */
      if (responseData.fault) {
        return dispatch({
          type: 'ALERT'
        })
      }

      /**
       * If there is callback in action and type is a function will return callback function
       * @param  {Function} typeof callback
       * @return {Function} return dispatch, getState and response data
       */
      if (typeof callback === 'function') {
        return callback(responseData, store.dispatch, store.getState)
      }

      /**
       * Dispatch action with response data
       * @type {[type]}
       */
      return dispatch({
        ...keys,
        type: type,
        responseData
      })
    },

    /**
     * Reject promise dispatch action fail to request API
     * @param  {Object} error
     * @return {Function}
     */
    error => dispatch({
      ...keys,
      type: 'API_FAIL',
      error
    })
    )
}
