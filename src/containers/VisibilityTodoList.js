import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const mapStateToProps = (state, ownProps) => {
  let visibilityTodos = [];
  switch(state.visibilityFilter) {
    case 'SHOW_ALL':
      visibilityTodos = state.todos;
      break;

    case 'SHOW_COMPLETED':
      visibilityTodos = state.todos.filter(x => x.completed);
      break;

    case 'SHOW_ACTIVE':
      visibilityTodos = state.todos.filter(x => !x.completed);
      break;

    default:
      break;
  }
  
  return {
    todos: visibilityTodos,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTodoClick: (todoId) => {
      dispatch(toggleTodo(todoId));
    },
  };
};

const VisibilityTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibilityTodoList;