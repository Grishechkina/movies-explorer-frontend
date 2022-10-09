import { SHORT_FILM_DURATION } from './constants'
import isURL from 'validator/lib/isURL';

export function findMovies(movies, searchStr, isShortMovies) {
  searchStr = searchStr.toLowerCase();
  const data = movies.filter(movie => {
    console.log(movie)
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
  movie.image = 'https://api.nomoreparties.co' + movie.image.url
  return {
    ...movie,
    nameRU: movie.nameRU || 'Название неизвестно',
    nameEN: movie.nameEN || 'Name is undefined',
    duration: movie.duration || 0,
    image: isURL(movie.image) ? movie.image : 'https://gladston.ru/upload/iblock/b59/img_183363.jpg',
    trailerLink: isURL(movie.trailerLink) ? movie.trailerLink : 'https://www.youtube.com',
  }
}