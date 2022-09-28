import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Profile() {
  const [visibleButton, setVisibleButton] = useState(false);
  const [hideEdit, setHideEdit] = useState(false);
  const [hideSignOut, setHideSignOut] = useState(false);
  const [inputIsReadOnly, setInputIsReadOnly] = useState(true);
  const [valueName, setValueName] = useState("Челик");
  const [valueEmail, setValueEmail] = useState("mikrochelik@yandex.ru");
  const [errorGeneralEdit, setGeneralErrorEdit] = useState('');
  const [errorButtonSave, setErrorButtonSave] = useState(false);
  const [valueNameError, setValueNameError] = useState('');
  const [valueEmailError, setValueEmailError] = useState('');
  const [formValid, setFormValid] = useState(false);

  const profileErrors = {
    "genError": "При обновлении профиля произошла ошибка.",
    "emailError": "Пользователь с таким email уже существует."
  }

  const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  function onEdit(e) {
    setVisibleButton(true);
    setHideEdit(true);
    setHideSignOut(true);
    setInputIsReadOnly(false);
  }
  function onSignOut(e) {
    console.log('onSignOut');
  }
  function onButtonSaveClick(e) {
    e.preventDefault();
    setGeneralErrorEdit('profile__error_show');
    setErrorButtonSave(true);
    setInputIsReadOnly(true);
  }
  const handleChangeName = event => {
    setValueName(event.target.value)
    if ((event.target.value.length < 2) || (event.target.value.length > 30)) {
      setValueNameError('Обязательная длина поля от 2 до 30 сим.');
    } else {
      setValueNameError('');
    }
  }
  const handleChangeEmail = event => {
    setValueEmail(event.target.value);
    if (!String(event.target.value).toLowerCase().match(EMAIL_REGEX)) {
      setValueEmailError('Некорректный email');
    } else {
      setValueEmailError('');
    }
  }
  useEffect(() => {
    if (valueNameError || valueEmailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [valueNameError, valueEmailError]);
  return (
    <div className="profile">
      <form className="profile__form">
        <div className="profile__form-top">
          <p className="profile__title">Привет, Человек!</p>
          <div className="profile__data">
            <div className="profile__data-line">
              <p className="profile__data-text">Имя</p>
              <label className="profile__data-label" >
                <input
                  className="profile__data-input"
                  name='name'
                  type="text"
                  value={valueName}
                  onChange={handleChangeName}
                  readOnly={inputIsReadOnly}
                ></input>
                <span className={`profile__error-validation ${(valueNameError && !inputIsReadOnly) && "profile__error-validation_show"}`}>{valueNameError}</span>
              </label>
            </div>
            <div className="profile__data-line">
              <p className="profile__data-text">E-mail</p>
              <label className="profile__data-label" >
                <input
                  className="profile__data-input"
                  type="email"
                  name='email'
                  value={valueEmail}
                  onChange={handleChangeEmail}
                  readOnly={inputIsReadOnly}
                ></input>
                <span className={`profile__error-validation ${(valueEmailError && !inputIsReadOnly) && "profile__error-validation_show"}`}>{valueEmailError}</span>
              </label>
            </div>
            <div className="profile__data-line"></div>
          </div>
        </div>
        <div className="profile__form-bottom">
          <span className={`profile__error ${errorGeneralEdit}`}>{profileErrors.genError}</span>
          <p className={`profile__edit ${hideEdit && 'profile__edit_hide'}`} onClick={onEdit}>Редактировать</p>
          <Link to='/' onClick={onSignOut} className={`profile__sign-out ${hideSignOut && 'profile__sign-out_hide'}`}>Выйти из аккаунта</Link>
          <button
            className={`profile__button-save 
                            ${visibleButton && 'profile__button-save_active'} 
                            ${errorButtonSave && 'profile__button-save_error'}
                            ${!formValid && 'profile__button-save_error'}`
            }
            onClick={onButtonSaveClick}
            type="submit"
            disabled={!formValid}
          >Сохранить</button>
        </div>
      </form>
    </div>
  );
}

export default Profile;