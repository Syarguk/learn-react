import React from 'react';
import Form from '../components/Form';
import ItemFD from '../components/ItemFormData';
import { CardUserData } from 'types/types';
import { useState } from 'react';
import '../styles/formpage.css';

/* type FS = {
  users: CardUserData[];
}; */

/* class FormPage extends React.Component<object, FS> {
  constructor(props: object) {
    super(props);
    this.state = {
      users: [],
      confirmMess: false,
    };
  }

  getListData() {
    return this.state.users.map((item: CardUserData, ind: number) => {
      return (
        <ItemFD
          name={item.name}
          data={item.data}
          gender={item.gender}
          promo={item.promo}
          period={item.period}
          img={item.img}
          key={ind}
        />
      );
    });
  }

  addUser(user: CardUserData) {
    this.setState((prSt: FS) => ({
      users: [...prSt.users, user],
    }));
  }

  render() {
    return (
      <>
        <div className="App" data-testid="page-about">
          <h1>Add User</h1>
        </div>
        <Form onAdd={(user: CardUserData) => this.addUser(user)} />
        {this.getListData()}
      </>
    );
  }
} */
function FormPage() {
  const usDef: CardUserData[] = [];
  const [users, setUsers] = useState(usDef);
  const getListData = () => {
    return users.map((item: CardUserData, ind: number) => {
      return (
        <ItemFD
          name={item.name}
          data={item.data}
          gender={item.gender}
          promo={item.promo}
          period={item.period}
          img={item.img}
          key={ind}
        />
      );
    });
  };

  const addUser = (user: CardUserData) => {
    /* this.setState((prSt: FS) => ({
      users: [...prSt.users, user],
    })); */
    setUsers((users) => [...users, user]);
  };

  return (
    <>
      <div className="App" data-testid="page-about">
        <h1>Add User</h1>
      </div>
      <Form onAdd={(user: CardUserData) => addUser(user)} />
      <div className="wrap-users">{getListData()}</div>
    </>
  );
}
export default FormPage;
