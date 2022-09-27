import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [nameError, setNameError] = useState('Поле обязательно для заполнения');
  const [emailError, setEmailError] = useState('Поле обязательно для заполнения');
  const [passError, setPassError] = useState('Поле обязательно для заполнения');
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passTouched, setPassTouched] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const registerErrors = {
    "genError": "При регистрации пользователя произошла ошибка.",
    "emailError": "Пользователь с таким email уже существует."
  }
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
  function handleNameChange(e) {
    setName(e.target.value);
    if ((e.target.value.length < 2) || (e.target.value.length > 30)) {
      setNameError('Обязательная длина поля от 2 до 30 символов.');
    } else {
      setNameError('');
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  function blurHandler(e) {
    switch (e.target.name) {
      case 'name':
        setNameTouched(true);
        break;
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
  useEffect(() => {
    if (nameError || emailError || passError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError, passError]);

  return (
    <div className="register">
      <div className="register__container">
        <img src={logo} alt="Фильмосерч лого" className="register__logo"/>
        <form className="register__form" name='register'>
          <h2 className="register__header">Добро пожаловать!</h2>
          <label className="register__form-field">Имя
            <input
              id="register-name-input"
              type="text"
              className="register__input"
              name="name"
              required
              placeholder="Имя"
              minLength="2"
              maxLength="30"
              value={name}
              onChange={handleNameChange}
              onBlur={blurHandler}
            />
            <span className={`register__error-validation ${(nameTouched && nameError) && 'register__error-validation_show'}`}>{nameError}</span>
          </label>
          <label className="register__form-field">Email
            <input
              id="register-email-input"
              type="text"
              className="register__input"
              name="email"
              required
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              onBlur={blurHandler}
            />
            <span className={`register__error-validation ${(emailTouched && emailError) && 'register__error-validation_show'}`}>{emailError}</span>
          </label>
          <label className="register__form-field">Пароль
            <input
              id="register-password-input"
              type="password"
              className="register__input"
              name="pass"
              required
              placeholder="Пароль"
              value={password}
              onChange={handlePasswordChange}
              onBlur={blurHandler}
            />
            <span className={`register__error-validation ${(passTouched && passError) && 'register__error-validation_show'}`}>{passError}</span>
          </label>
          <span className={`register__error ${error}`}>{registerErrors.genError}</span>
          <button
            className={`register__button ${!formValid && 'register__button_disabled'}`}
            onClick={handleSubmit}
            type="submit"
            disabled={!formValid}
          >Зарегистрироваться</button>
          <div className="register__caption">
            <p className="register__caption-text">Уже зарегистрированы?</p>
            <Link to="/sign-in" className="register__caption-link link">Войти</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;