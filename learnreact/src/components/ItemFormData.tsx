import { CardUserData } from 'types/types';

function ItemFD(props: CardUserData) {
  const { name, data, gender, promo, period, img } = props;
  return (
    <div className="wrap-items-fd">
      <h3>User - {name}</h3>
      <p>Data: {data}</p>
      <p>Gender: {gender}</p>
      {promo ? <p>Promo 10%</p> : null}
      {period ? <p>Period {period}</p> : null}
      {img ? <img src={img} alt="avatar" /> : null}
    </div>
  );
}
export default ItemFD;
