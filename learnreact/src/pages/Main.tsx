import { products } from '../data/data';
import React from 'react';
import InputSearch from '../components/InputSearch';
import Card from '../components/Card';
import '../styles/main.css';
import '../styles/card.css';

class Main extends React.Component {
  getStorage = () => localStorage.getItem('inpVal') ?? '';

  render() {
    return (
      <div className="main" data-testid="page-main">
        <InputSearch getstor={this.getStorage()} />
        <div className="cards-wrap">
          {products.map((item) => {
            return <Card {...item} key={item.id} />;
          })}
        </div>
      </div>
    );
  }
}
export default Main;
