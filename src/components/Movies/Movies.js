import { useState, useEffect } from 'react';
import moviesApi from '../../utils/moviesApi'
import { findMovies, validateMovie } from '../../utils/helper'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import NotFound from '../NotFound/NotFound';

function Movies() {

  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [keywords, setKeywords] = useState('');
  const [isGetMoviesError, setIsGetMoviesError] = useState(false);

  useEffect(() => {
    const keywords = localStorage.getItem('keywords');
    keywords && setKeywords(keywords);
    const initialMovies = JSON.parse(localStorage.getItem('initialMovies'));
    initialMovies && setMovies(initialMovies);
    const shortMovie = localStorage.getItem('shortMovie');
    shortMovie && setIsShortFilm(JSON.parse(shortMovie));

    setIsLoading(true)
    moviesApi.getMovies()
      .then(movies => {
        const validatedMovies = movies.map(movie => validateMovie(movie))
        setAllMovies(validatedMovies)
        if (!initialMovies || !initialMovies.length) {
          setMovies(validatedMovies)
        }
        setIsLoading(false)
      })
      .catch((err) => {
        setIsGetMoviesError(true)
        setIsLoading(false)
      })
  }, [])

  function getMovies(searchStr, isShortMovies, isSearchBtnClicked = false) {
    localStorage.setItem('keywords', searchStr);
    localStorage.setItem('shortMovie', isShortMovies);
    if (allMovies.length) {
      const moviesList = findMovies(allMovies, searchStr, isShortMovies)
      setMovies(moviesList)
      localStorage.setItem('initialMovies', JSON.stringify(moviesList));
    }
  }

  return (
    <section>
      <SearchForm onClick={getMovies} isShort={isShortFilm} initialSearchStr={keywords} />
      {isLoading && <Preloader />}
      {isGetMoviesError && <p className='movies__error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
      {!movies.length && !isGetMoviesError && <NotFound />}
      {!!movies.length && <MoviesCardList movies={movies} isShortFilm={isShortFilm} isOpenSavedMovies={false} />}
    </section>
  )
}

export default Movies;