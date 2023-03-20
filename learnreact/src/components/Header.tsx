import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  return (
    <div className="header" role="header">
      <ul>
        <li>
          <Link to="/" data-testid="head-main-link">
            <span>main</span>
          </Link>
        </li>
        <li>
          <Link to="/about" data-testid="head-about-link">
            <span>about</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
