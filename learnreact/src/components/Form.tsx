import { Component, FormEvent, createRef } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.name = createRef();
    this.data = createRef();
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.onAdd(this.name.current.value, this.data.current.value);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" ref={this.name} placeholder="Name" />
        </label>
        <label>
          <input type="text" ref={this.data} placeholder="Data" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
