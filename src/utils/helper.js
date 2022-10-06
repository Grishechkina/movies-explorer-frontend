import { SHORT_FILM_DURATION } from './constants'

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