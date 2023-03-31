import { NavLink } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  return (
    <div className="header" role="header">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? ' active-link' : '')}
            to="/"
            data-testid="head-main-link"
          >
            <span>main</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? ' active-link' : '')}
            to="/about"
            data-testid="head-about-link"
          >
            <span>about</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? ' active-link' : '')}
            to="/form"
            data-testid="head-about-link"
          >
            <span>form</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
