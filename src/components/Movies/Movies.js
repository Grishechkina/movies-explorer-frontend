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
  const [keywords, setKeywords] = useState('');
  const [isGetMoviesError, setIsGetMoviesError] = useState(false);

  useEffect(() => {
    const keywords = localStorage.getItem('keywords');
    keywords && setKeywords(keywords);
    const initialMovies = localStorage.getItem('initialMovies');
    initialMovies && setMovies(JSON.parse(initialMovies));
    const shortMovie = localStorage.getItem('shortMovie');
    shortMovie && setIsShortFilm(JSON.parse(shortMovie));
  }, [])

  function getMovies(searchStr, isShortMovies, isSearchBtnClicked = false) {
    localStorage.setItem('keywords', searchStr);
    localStorage.setItem('shortMovie', isShortMovies);
    if (!movies.length && isSearchBtnClicked) {
      setIsLoading(true)
      setMovies([]);
      moviesApi.getMovies()
        .then(movies => {
          const moviesList = findMovies(movies, searchStr, isShortMovies)
          moviesList.forEach(movie => {
            movie.image = 'https://api.nomoreparties.co' + movie.image.url;
          })
          setMovies(moviesList)
          localStorage.setItem('initialMovies', JSON.stringify(moviesList));
          setIsLoading(false)
        })
        .catch((err) => {
          setIsGetMoviesError(true)
          setIsLoading(false)
        })
    } else {
      const moviesList = findMovies(movies, searchStr, isShortMovies)
      setMovies(moviesList)
      localStorage.setItem('initialMovies', JSON.stringify(moviesList));
    }
  }

  return (
    <section>
      <SearchForm onClick={getMovies} isShort={isShortFilm} initialSearchStr={keywords}/>
      {isLoading  && <Preloader />}
      {isGetMoviesError && <p className='movies__error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
      {!movies.length && !isGetMoviesError && <NotFound />}
      {!!movies.length && <MoviesCardList movies={movies} isShortFilm={isShortFilm} isOpenSavedMovies={false} />}
    </section>
  )
}

export default Movies;