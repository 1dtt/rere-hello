import {
  ADD_TODO,
  TOGGLE_TODO
} from '../actions';

const todo = (state ={}, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };

    case TOGGLE_TODO:
      return Object.assign({}, state, {completed: !state.completed});

    default:
      return state;
  }
}

const todos = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];

    case TOGGLE_TODO:
      return state.map((s) => {
        if(s.id !== action.id) {
          return s;
        }

        return todo(s, action);
      });

    default:
      return state;
  }
}

export default todos;