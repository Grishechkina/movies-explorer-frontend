import { useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
import { useFormWithValidation } from '../../customHooks/validation';

function Login({ onSubmit, error, clearErors}) {

  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

  useEffect(() =>{ return clearErors()}, [])

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ email: values.email, password: values.password })
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
              type="email"
              className="login__input"
              name="email"
              required
              placeholder="Email"
              value={values.email || ''}
              onChange={handleChange}
            />
            <span className='login__error-validation login__error-validation_show'>
              {errors.email}
            </span>
          </label>
          <label className="login__form-field">Пароль
            <input
              id="login-password-input"
              type="password"
              className="login__input"
              name="password"
              required
              placeholder="Пароль"
              minLength="2"
              value={values.password || ''}
              onChange={handleChange}
            />
            <span className='login__error-validation login__error-validation_show'>{errors.password || ''}</span>
          </label>
            <span className='login__error login__error_show'>{error}</span>
            <button
              className={`login__button ${!isValid && 'login__button_disabled'}`}
              onClick={handleSubmit}
              type="submit"
              disabled={!isValid}
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