import React from 'react';
import '../styles/card.css';

interface CardType {
  key: number;
  title: string;
  price: number;
  thumbnail: string;
}

class Card extends React.Component<CardType> {
  render() {
    const { key, title, thumbnail, price } = this.props;
    return (
      <div className="card" key={key}>
        <div className="title">{title}</div>
        <div className="image">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="price">{price}</div>
      </div>
    );
  }
}
export default Card;
