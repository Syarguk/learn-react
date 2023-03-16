import React from 'react';
import '../styles/card.css';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="title"></div>
        <div className="image"></div>
        <div className="price"></div>
      </div>
    );
  }
}
export default Card;
