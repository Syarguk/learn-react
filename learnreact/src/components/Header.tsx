import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <Link to="/">
            <span>main</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span>about</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
