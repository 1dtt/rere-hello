import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import TodoList from './components/TodoList';

let store = createStore(todoApp);

const log = (id) => {
  console.log(id);
}

render(
  <Provider store={store}>
    <TodoList
      todos={[{id: 1, text: 'test1', completed: false}, {id: 2, text: 'test2', completed: true}]}
      onTodoClick={log}
    />
  </Provider>,
  document.getElementById('root')
)