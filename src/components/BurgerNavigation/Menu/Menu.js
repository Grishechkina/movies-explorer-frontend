import './Menu.css'
import { NavLink } from 'react-router-dom';

function Menu({ isOpen, onClose }) {

  const setLinkStyle = ({ isActive }) => (isActive ? 'menu__link_active' : '') + ' menu__link link'

  return (
    <div className={`menu ${isOpen && 'menu_opened'}`}>
      <div className="menu__container">
        <button className="menu__close-button btn" onClick={onClose} type="button" aria-label="Close"></button>
        <div className='menu__links'>
          <nav className='menu__nav'>
            <NavLink to='/' end className={setLinkStyle} onClick={onClose}>Главная</NavLink>
            <NavLink to='/movies' className={setLinkStyle} onClick={onClose}>Фильмы</NavLink>
            <NavLink to='/saved-movies' className={setLinkStyle} onClick={onClose}>Сохраненные фильмы</NavLink>
          </nav>
          <NavLink to="/profile" className="menu__account link" onClick={onClose}>
          Аккаунт
          <button type="button" className="menu__account-icon btn" />
        </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Menu;