import { products } from '../data/data';
import React from 'react';
import '../styles/main.css';
import '../styles/card.css';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="search-wrap">
          <input className="search" type="text" />
        </div>
        <div className="cards-wrap">
          {products.map((item, index) => {
            return (
              <div className="card" key={index}>
                <div className="title">{item.title}</div>
                <div className="image">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className="price">{item.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Main;
