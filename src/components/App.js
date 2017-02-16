import React from 'react';
import Footer from './Footer';
import AddTodoForm from '../containers/AddTodoForm';
import VisibilityTodoList from '../containers/VisibilityTodoList';

class App extends React.Component {
  render() {
    return (
      <div>
        <AddTodoForm />
        <VisibilityTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;