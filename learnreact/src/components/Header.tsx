import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">
            <a>main</a>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <a>about</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
