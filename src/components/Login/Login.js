import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [passTouched, setPassTouched] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('Поле Email не должно быть пустым.');
  const [passError, setPassError] = useState('Поле Пароль не должно быть пустым.');

  const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  useEffect(() => {
    if (emailError || passError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passError]);

  function handleEmailChange(e) {
    setEmail(e.target.value);
    if (!String(e.target.value).toLowerCase().match(EMAIL_REGEX)) {
      setEmailError('Некорректный email');
    } else {
      setEmailError('');
    }
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    if (e.target.value.length < 2) {
      setPassError('Обязательная длина поля от 2 символов.');
    } else {
      setPassError('');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function blurHandler(e) {
    switch (e.target.name) {
      case 'email':
        setEmailTouched(true);
        break;
      case 'pass':
        setPassTouched(true);
        break;
      default:
        break;
    }
  }

  return (
    <section className="login">
      <div className="login__container">
        <img src={logo} alt="Фильмосерч лого" className="login__logo" />
        <form className="login__form" name='login'>
          <h2 className="login__title">Рады видеть!</h2>
          <label className="login__form-field">Email
            <input
              id="login-email-input"
              type="text"
              className="login__input"
              name="email"
              required
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              onBlur={blurHandler}
            />
            <span className={`login__error-validation ${(emailTouched && emailError) && 'login__error-validation_show'}`}>{emailError}</span>
          </label>
          <label className="login__form-field">Пароль
            <input
              id="login-password-input"
              type="password"
              className="login__input"
              name="pass"
              required
              placeholder="Пароль"
              minLength="2"
              value={password}
              onChange={handlePasswordChange}
              onBlur={blurHandler}
            />
            <span className={`login__error-validation ${(passTouched && passError) && 'login__error-validation_show'}`}>{passError}</span>
          </label>
          <span className={`login__error ${error}`}>Вы ввели неправильный логин или пароль.</span>
          <button
            className={`login__button ${!formValid && 'login__button_disabled'} btn`}
            onClick={handleSubmit}
            type="submit"
            disabled={!formValid}
          >Войти</button>
          <div className="login__caption">
            <p className="login__caption-text">Ещё не зарегистрированы?</p>
            <Link to="/sign-up" className="login__caption-link link">Регистрация</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;