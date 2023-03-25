import { Component } from 'react';
import Form from '../components/Form';
import ItemFD from '../components/ItemFormData';
import '../styles/formpage.css';

interface FD {
  name: string;
  data: string;
}
class FormPage extends Component<{ str?: string }, { arrFormData: FD[] }> {
  constructor(props: { str: string | undefined }) {
    super(props);
    this.state = {
      arrFormData: [],
    };
  }

  getListData() {
    return this.state.arrFormData.map((item: FD, ind: number) => {
      return <ItemFD name="fgh" data={item.data} key={ind} />;
    });
  }

  addUser(name: string, data: string) {
    const newUser = {
      name,
      data,
    };
    this.setState(({ arrFormData }) => {
      const newArr = [...arrFormData, newUser];
      return newArr;
    });
  }

  render() {
    return (
      <>
        <div className="App" data-testid="page-about">
          <h1>Add User</h1>
        </div>
        <Form onAdd={this.addUser} />
        {this.getListData()}
      </>
    );
  }
}

export default FormPage;
