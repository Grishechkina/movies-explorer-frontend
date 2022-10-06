import { useState, useEffect } from 'react';
import moviesApi from '../../utils/moviesApi'
import { findMovies } from '../../utils/helper'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import NotFound from '../NotFound/NotFound';

function Movies() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [isGetMoviesError, setIsGetMoviesError] = useState(false);

  function getMovies(searchStr, isShortMovies) {
    setIsLoading(true)
    setMovies([]);
    moviesApi.getMovies()
      .then(movies => {
        const moviesList = findMovies(movies, searchStr, isShortMovies)
        moviesList.forEach(movie => {
          movie.image = 'https://api.nomoreparties.co' + movie.image.url;
        })
        setMovies(moviesList)
        setIsLoading(false)
      })
      .catch((err) => setIsGetMoviesError(true))
  }
  return (
    <section>
      <SearchForm onClick={getMovies} isShort={false}/>
      {isLoading && !isGetMoviesError && <Preloader />}
      {isGetMoviesError && <p className='movies__error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
      {!movies.length && !isGetMoviesError && <NotFound />}
      {!!movies.length && <MoviesCardList movies={movies} isShortFilm={isShortFilm} isOpenSavedMovies={false}/>}
    </section>
  )
}

export default Movies;