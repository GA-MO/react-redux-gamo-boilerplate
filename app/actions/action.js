import fetch from 'isomorphic-fetch';

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