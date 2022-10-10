import { BASE_URL } from './constants.js';

class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl
    this.options = { headers: options.headers, credentials: 'include' };
  }

  getUserInfo() {
    return fetch(this.baseUrl + '/users/me', {
      baseUrl: BASE_URL,
      credentials: 'include'
    })
      .then(this._checkServerResp)
  }

  editUserInfo(body) {
    this._createOptions('PATCH', body)
    return fetch(this.baseUrl + '/users/me', this.options)
      .then(this._checkServerResp)
  }

  getSavedMovies() {
    return fetch(this.baseUrl + '/movies', this.options)
      .then(this._checkServerResp)
  }

  handleLike(id, isLiked, movie) {
    return isLiked ? this.deleteSavedMovie(id) : this.addSavedMovie(movie)
  }

  deleteSavedMovie(id) {
    this._createOptions('DELETE', {})
    return fetch(`${this.baseUrl}/movies/${id}`, this.options)
      .then(this._checkServerResp)
  }

  addSavedMovie(body) {
    this._createOptions('POST', body)
    return fetch(this.baseUrl + '/movies', this.options)
      .then(this._checkServerResp)
  }

  _createOptions(method, body) {
    this.options.method = method
    this.options.body = JSON.stringify(body)
  }

  _checkServerResp(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const api = new Api({
  baseUrl: BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default api