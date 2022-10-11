import { useState, useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom'
import MoviesCard from "../MoviesCard/MoviesCard";
import { MOVIES_LIST_RENDER_CONFIG } from '../../utils/constants';

function MoviesCardList({ movies, handleCardClick }) {

  const [counter, setCounter] = useState(0);
  const [maxAmountOfCard, setMaxAmountOfCard] = useState(0);
  const [amountToAdd, setAmountToAdd] = useState(0);
  const [width, setWidth] = useState(document.documentElement.clientWidth);
  const [shownMovies, setShownMovies] = useState([]);

  const path = useLocation().pathname;
  const isOpenSavedMovies = path === '/saved-movies'

  useEffect(() => {
    function handleResize() {
      setWidth(document.documentElement.clientWidth);;
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', getMoviesListRenderConfig);
  }, [])

  useEffect(() => {
    getMoviesListRenderConfig();
  }, [width])

  useEffect(() => {
    setShownMovies([])
    movies.length < maxAmountOfCard + 1 ? setShownMovies(movies) : setShownMovies(movies.slice(0, maxAmountOfCard));
    // шаг: 3 фильма. 12/3 = 4
    setCounter(4)
  }, [movies, maxAmountOfCard])

  function getMoviesListRenderConfig() {
    if (width >= 1280) {
      setMaxAmountOfCard(MOVIES_LIST_RENDER_CONFIG['1280px'].maxAmount);
      setAmountToAdd(MOVIES_LIST_RENDER_CONFIG['1280px'].amountToAdd);
    } else if (width > 500) {
      setMaxAmountOfCard(MOVIES_LIST_RENDER_CONFIG['768px'].maxAmount);
      setAmountToAdd(MOVIES_LIST_RENDER_CONFIG['768px'].amountToAdd);
    } else {
      setMaxAmountOfCard(MOVIES_LIST_RENDER_CONFIG['320px'].maxAmount);
      setAmountToAdd(MOVIES_LIST_RENDER_CONFIG['320px'].amountToAdd);
    }
  }

  function addMovies() {
    const addingArr = movies.slice(counter * amountToAdd, (counter + 1) * amountToAdd)
    setShownMovies(shownMovies.concat(addingArr))
    setCounter(1 + counter)
  }

  return (
    <div className="movies-card">
      <ul className="movies-card__list">
        {shownMovies
          .map((item) => (
            <li className="movies-card__item" key={item.movieId}>
              <MoviesCard movie={item} isOpenSavedMovies={isOpenSavedMovies} handleCardClick={handleCardClick}/>
            </li>
          ))
        }
      </ul>
      {movies.length !== shownMovies.length && <button type="button" className="btn movies-card__more-btn" onClick={addMovies}>Еще</button>}
    </div>
  );
}

export default MoviesCardList;