import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

export const addTodo = (data) => {
  return{
    type: 'ADD_TODO',
    data
  }
}

export const goToPage = (path) => {
	return dispatch => dispatch(push(`/${path}`))
}