import { products } from '../data/data';
import InputSearch from '../components/InputSearch';
import Card from '../components/Card';
import '../styles/main.css';
import '../styles/card.css';

function Main() {
  const getStorage = () => localStorage.getItem('inpVal') ?? '';
  return (
    <div className="main" data-testid="page-main">
      <InputSearch getstor={getStorage} />
      <div className="cards-wrap">
        {products.map((item) => {
          return <Card {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
}
export default Main;
