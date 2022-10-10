import { SHORT_FILM_DURATION } from './constants'
import isURL from 'validator/lib/isURL';

export function findMovies(movies, searchStr, isShortMovies) {
  searchStr = searchStr.toLowerCase();
  const data = movies.filter(movie => {
    const movieRU = movie.nameRU.toLowerCase();
    const movieEN = movie.nameEN.toLowerCase();
    if (isShortMovies) {
      return (movieRU.includes(searchStr) || movieEN.includes(searchStr)) && movie.duration < SHORT_FILM_DURATION
    }
    return movieRU.includes(searchStr) || movieEN.includes(searchStr)
  })
  return data
}

export function validateMovie(movie) {
  movie.thumbnail = 'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url
  const image = 'https://api.nomoreparties.co' + movie.image.url
  return {
    country: movie.country,
    description: movie.description,
    director: movie.director,
    year: movie.year,
    nameRU: movie.nameRU || 'Названия нет :(',
    nameEN: movie.nameEN || 'Name is undefined :(',
    duration: movie.duration || 0,
    image: isURL(image) ? image : 'https://gladston.ru/upload/iblock/b59/img_183363.jpg',
    trailerLink: isURL(movie.trailerLink) ? movie.trailerLink : 'https://www.youtube.com',
    thumbnail: isURL(movie.thumbnail) ? movie.thumbnail : 'https://gladston.ru/upload/iblock/b59/img_183363.jpg',
    movieId: movie.id
  }
}