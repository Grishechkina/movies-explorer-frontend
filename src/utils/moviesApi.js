import { MOVIES_URL } from './constants.js';

class MoviesApi {
  constructor(MOVIES_URL) {
    this._MOVIES_URL = MOVIES_URL;
  }

  getMovies() {
    return fetch(this._MOVIES_URL)
      .then(this._checkServerResp);
  }

  _checkServerResp(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const moviesApi = new MoviesApi(MOVIES_URL);

export default moviesApi;