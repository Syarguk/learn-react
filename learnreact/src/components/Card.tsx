import React from 'react';
import '../styles/card.css';

interface CardType {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

class Card extends React.Component<CardType> {
  render() {
    const { id, title, thumbnail, price } = this.props;
    return (
      <div className="card" key={id}>
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
