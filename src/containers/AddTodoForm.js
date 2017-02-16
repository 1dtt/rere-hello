import { connect } from 'react-redux';
import { addTodo } from '../actions';
import AddTextForm from '../components/AddTextForm';

const mapStateToProps = (state, ownProps) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (text) => {
      dispatch(addTodo(text));
    },
  };
};

const AddTodoForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTextForm);

export default AddTodoForm;