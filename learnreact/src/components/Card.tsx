import '../styles/card.css';

interface CardType {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

function Card(props: CardType) {
  const { id, title, thumbnail, price } = props;
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
export default Card;
