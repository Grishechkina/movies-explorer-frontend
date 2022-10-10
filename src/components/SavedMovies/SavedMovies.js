import { useState, useEffect } from 'react';
import { findMovies } from '../../utils/helper'
import api from '../../utils/MainApi'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ savedMovies }) {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(savedMovies)
  }, [])

  function getMovies(searchStr, isShortMovies) {
    const moviesList = findMovies(savedMovies, searchStr, isShortMovies)
    setMovies(moviesList)
  }

  function deleteCard(e, movie) {
    api.deleteSavedMovie(movie._id)
      .then(res => {
        const idx = savedMovies.findIndex(i => i.movieId === res.movieId)
        savedMovies.splice(idx, 1)
        setMovies([...savedMovies])
      })
      .catch(err => console.log(err))
  }

  return (
    <section>
      <SearchForm onClick={getMovies} initialSearchStr="" isShort={false} />
      <MoviesCardList isOpenSavedMovies="true" movies={movies} handleCardClick={deleteCard} />
    </section>
  )
}

export default SavedMovies;