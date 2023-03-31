import Form from '../components/Form';
import ItemFD from '../components/ItemFormData';
import { CardUserData } from 'types/types';
import { useState } from 'react';
import '../styles/formpage.css';

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
