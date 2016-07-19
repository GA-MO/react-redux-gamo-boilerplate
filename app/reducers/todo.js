
const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [...state, {
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        todo: action.data,
      }];
    }
    case 'DELETE_TODO': {
      return state.filter(todo => todo.id !== action.id);
    }
    default: {
      return state;
    }
  }
};

export default todo;

