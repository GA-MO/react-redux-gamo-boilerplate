require('es6-promise').polyfill();
import 'isomorphic-fetch';
export const apiURL = 'http://programthong.com/wing/wingdev';

/**
 * Fetch API
 * @param  {String} url     path request to service
 * @param  {Object} options headers, body, method
 * @return {Any} response data from service
 */
function fetchApi(url, options) {
  return fetch(url, options)
    .then((response) =>
      response.json().then((json) => ({ json, response }))
    )
    .then(({ json, response }) => {
      if (!response.ok) {
        const { status, statusText } = response;
        return Promise.reject({
          status,
          statusText,
        });
      }
      return json;
    });
}

export default (store) => (dispatch) => (action) => {

  /**
   * Check if action is a function return Dispatch and GetState
   * @param  {function} typeof action
   * @return {function}
   */
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }

  /**
   * If request is undefined will dispatch action
   */
  const { type, request, callback, ...keys } = action;
  if (!request) return dispatch(action);

  /**
   * If pathURL in request is undefined will dispatch action
   */
  const { pathURL, options = {} } = request;
  if (!pathURL) return dispatch(action);

  /**
   * Dispatch action when start request API
   */
  dispatch({
    type: 'API_REQUEST',
    ...keys,
  });

  /**
   * If there are options method are (POST, PUT)
   * @param  {String} options.method
   * @return {Object}
   */
  if (options.method === 'POST') {
    options.headers = {
      ...options.headers,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      WEB_METHOD_CHANNEL: 'WEBUI',
      E2E_REFID: '',
    };
    options.body = JSON.stringify(options.body);
  } else {
    options.method = 'GET';
  }

  /**
   * Call API via fetchApi function
   * @param {String} patch
   * @param {Object} options
   */
  return fetchApi(`${apiURL}${pathURL}`, options)
  .then(

    /**
     * Resolve promise
     * @param  {Any} data
     * @return {Function}
     */
    (data) => {

      /**
       * Dispatch action when request API is done
       */
      dispatch({
        type: 'API_DONE',
      })

      /**
       * If response from server there is fault will dispatch action alert
       */
      if (data.fault) {
        return dispatch({
          type: 'ALERT',
        })
      }

      /**
       * If there is callback in action and type is a function will return callback function
       * @param  {Function} typeof callback
       * @return {Function} return dispatch, getState and response data
       */
      if (typeof callback === 'function') {
        return callback(store.dispatch, store.getState, data);
      }

      /**
       * Dispatch action with response data
       * @type {[type]}
       */
      return dispatch({
        ...keys,
        type: type,
        data,
      });
    },

    /**
     * Reject promise dispatch action fail to request API
     * @param  {Object} error
     * @return {Function}
     */
    (error) => dispatch({
      ...keys,
      type: 'API_FAIL',
      error,
    })
  );
}
