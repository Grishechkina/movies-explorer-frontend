import { NavLink } from 'react-router-dom';

function Navigation() {

  const setLinkStyle = ({ isActive }) => (isActive ? 'navigation__link_active' : '') + ' link'

    return (
      <nav className="navigation">
      <NavLink to="/movies" className={setLinkStyle}>
        Фильмы
      </NavLink>
      <NavLink to="/saved-movies" className={setLinkStyle}>
        Сохранённые фильмы
      </NavLink>
    </nav>
    );
}

export default Navigation;