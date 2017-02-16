// reducer's name === state's name
//
// example:
//
// state: {
//  todos: [{
//   id: 1,
//   text: 'do react',
//   completed: false,
//  }, {
//   id: 2,
//   text: 'do angular',
//   completed: true,
//  }],
//  visibilityFilter: 'SHOW_ALL', // SHOW_ACTIVE, SHOW_COMPLETED
// }
//
// ===> todos reducer + visibilityFilter reducer

import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

export default todoApp;