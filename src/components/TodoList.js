import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    const todos = this.props.todos;
    let todoListElm = todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          onClick={() => {
            this.props.onTodoClick(todo.id);
          }}
          {...todo}
        />
      );
    });
    return (
      <ul>
        {todoListElm}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    completed: React.PropTypes.bool.isRequired,
    text: React.PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: React.PropTypes.func.isRequired,
};

export default TodoList;