export const BASE_URL = 'https://film.o.search.nomoredomains.sbs/api';
export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const MOVIES_LIST_RENDER_CONFIG = {
  '1280px': { maxAmount: 12, amountToAdd: 3 },
  '768px': { maxAmount: 8, amountToAdd: 2 },
  '320px': { maxAmount: 5, amountToAdd: 2 },
}
export const SHORT_FILM_DURATION = 40;

export const profileErrors = {
  generalError: 'При обновлении профиля произошла ошибка.',
  emailError: 'Пользователь с таким email уже существует.'
}

export const authErrors = {
  generalError: 'На сервере произошла ошибка.',
  emailError: 'Пользователь с таким email уже существует.',
  wrongData: 'Неправильные почта или пароль.',
}

export const errorOnServer = {
  code: 500,
  text: 'На сервере произошла ошибка.'
}
