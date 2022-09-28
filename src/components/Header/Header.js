import { Link, useLocation } from 'react-router-dom'
import logo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation';
import BurgerNavigation from '../BurgerNavigation/BurgerNavigation';

function Header() {
  const path = useLocation().pathname;
  const needNav = path === '/movies' || path === '/saved-movies' || path === '/profile'

  return (
    <header className="header standart-paddings" style={{ backgroundColor: path === '/' ? '#F3C1F8' : 'white' }}>
      <div className="header__left-links">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Фильмосерч лого" />
        </Link>
        {needNav && window.innerWidth > 850 && <Navigation />}
      </div>
      {needNav && window.innerWidth < 850 && <BurgerNavigation />}
      {path === '/' &&
        <div className="header__sign-btns">
          <Link className="header__link link" to="/sign-up">Регистрация</Link>
          <Link className="header__link link header__link_signin" to="/sign-in">Войти</Link>
        </div>
      }
      {needNav && window.innerWidth > 850 &&
        <Link to="/profile" className="header__account link">
          Аккаунт
          <button className="header__account-icon btn" />
        </Link>
      }
    </header>
  )
}

export default Header;