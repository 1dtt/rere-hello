import React from 'react';

class AddTextForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!this.state.value.trim()) {
            return;
          }
          this.props.onSubmit(this.state.value);
          this.setState({
            value: '',
          });
        }}
      >
        <input
          value={this.state.value}
          onChange={(event) => {
            event.preventDefault();
            this.setState({
              value: event.target.value,
            });
          }}
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default AddTextForm;