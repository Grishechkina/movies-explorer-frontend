import { Link, useLocation } from 'react-router-dom'
import logo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation';

function Header() {
  const path = useLocation().pathname;

  return (
    <header className="header standart-paddings" style={{ backgroundColor: path === '/' ? '#F3C1F8' : 'white' }}>
      <div className="header__left-links">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Фильмосерч лого" />
        </Link>
        {(path === '/movies' || path === '/saved-movies' || path === '/profile') && <Navigation />}
      </div>
      {path === '/' &&
        <div className="header__sign-btns">
          <Link className="header__link link" to="/sign-up">Регистрация</Link>
          <Link className="header__link link header__link_signin" to="/sign-in">Войти</Link>
        </div>
      }
      {(path === '/movies' || path === '/saved-movies' || path === '/profile') &&
        <Link to="/profile" className="header__account link">
          Аккаунт
          <button className="header__account-icon" />
        </Link>
      }
    </header>
  )
}

export default Header;