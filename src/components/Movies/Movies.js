import { useState, useEffect } from 'react';
import api from '../../utils/MainApi'
import moviesApi from '../../utils/MoviesApi'
import { findMovies, validateMovie } from '../../utils/helper'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import NotFound from '../NotFound/NotFound';

function Movies({ savedMovies, allMoviesFromServer, isGetMoviesError, isLoading }) {

  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [keywords, setKeywords] = useState('');

  const initialMovies = JSON.parse(localStorage.getItem('initialMovies'));

  useEffect(() => {
    const keywords = localStorage.getItem('keywords');
    keywords && setKeywords(keywords);
    initialMovies && setMovies(initialMovies);
    const shortMovie = localStorage.getItem('shortMovie');
    shortMovie && setIsShortFilm(JSON.parse(shortMovie));
  }, [])

  useEffect(() => {
    setAllMovies(allMoviesFromServer)
    if (!keywords && (!initialMovies || !initialMovies.length)) {
      setMovies(allMoviesFromServer)
    }
  }, [allMoviesFromServer])

  useEffect(() => {
    movies.forEach(el => {
      el.isLiked = savedMovies.findIndex(i => i.movieId === el.movieId) > -1
    });
  }, [movies, savedMovies])

  function getMovies(searchStr, isShortMovies) {
    localStorage.setItem('keywords', searchStr);
    localStorage.setItem('shortMovie', isShortMovies);
    if (allMovies.length) {
      const moviesList = findMovies(allMovies, searchStr, isShortMovies)
      setMovies(moviesList)
      localStorage.setItem('initialMovies', JSON.stringify(moviesList));
    }
  }

  function addCardToSaved(e, movie) {
    const isLiked = movie.isLiked
    if (isLiked) {
      const idx = savedMovies.findIndex(i => i.movieId === movie.movieId)
      api.deleteSavedMovie(savedMovies[idx]._id)
        .then(res => {
          e.target.classList.remove('card__button_saved')
          savedMovies.splice(idx, 1)
        })
        .catch(err => console.log(err))
    } else {
      delete movie.isLiked
      api.addSavedMovie(movie)
        .then((res) => {
          e.target.classList.add('card__button_saved')
          savedMovies.push(res)

        })
        .catch(err => console.log(err))
    }
  }

  return (
    <section>
      <SearchForm onClick={getMovies} isShort={isShortFilm} initialSearchStr={keywords} />
      {isLoading && <Preloader />}
      {isGetMoviesError && <p className='movies__error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
      {!movies.length && !isGetMoviesError && <NotFound />}
      {!isLoading && !!movies.length && <MoviesCardList movies={movies} handleCardClick={addCardToSaved} />}
    </section>
  )
}

export default Movies;