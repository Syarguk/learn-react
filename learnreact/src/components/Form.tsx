import { Component, FormEvent, createRef } from 'react';
import { TypePropsForm, CardUserData } from 'types/types';

class Form extends Component<TypePropsForm> {
  constructor(props: TypePropsForm) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  name = createRef<HTMLInputElement>();
  data = createRef<HTMLInputElement>();
  gender = createRef<HTMLSelectElement>();
  promo = createRef<HTMLInputElement>();
  period1 = createRef<HTMLInputElement>();
  period2 = createRef<HTMLInputElement>();
  file = createRef<HTMLInputElement>();

  createUser() {
    const file = this.file.current?.files?.[0];
    const user = {
      name: this.name.current?.value,
      data: this.data.current?.value,
      gender: this.gender.current?.value,
      promo: this.promo.current?.checked,
      period: this.period1.current?.checked
        ? this.period1.current?.value
        : this.period2.current?.checked
        ? this.period2.current?.value
        : undefined,
      img: file ? URL.createObjectURL(file) : undefined,
    };
    return user;
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const user: CardUserData = this.createUser();
    this.props.onAdd(user);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" ref={this.name} placeholder="Name" />
        </label>
        <label>
          <input type="date" ref={this.data} placeholder="Data" />
        </label>
        <label>
          <select ref={this.gender}>
            <option key="1" value="man">
              Man
            </option>
            <option key="2" value="woman">
              Woman
            </option>
          </select>
        </label>
        <div>
          <label>
            Promocod
            <input type="checkbox" ref={this.promo} />
          </label>
        </div>
        <div className="switcher">
          <span>Period: </span>
          <label>
            10 days
            <input type="radio" name="switch" value="10 days" ref={this.period1} />
          </label>
          <label>
            20 days
            <input type="radio" name="switch" value="20 days" ref={this.period2} />
          </label>
        </div>
        <label>
          <input type="file" ref={this.file} placeholder="Add file" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
