import { useState, useEffect } from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import { MOVIES_LIST_RENDER_CONFIG } from '../../utils/constants';

function MoviesCardList({ movies, isShortFilm, isOpenSavedMovies }) {

  const [counter, setCounter] = useState(0);
  const [maxAmountOfCard, setMaxAmountOfCard] = useState(0);
  const [amountToAdd, setAmountToAdd] = useState(0);
  const [shownMovies, setShownMovies] = useState([]);

  useEffect(() => {
    window.addEventListener('resize', getMoviesListRenderConfig);
    getMoviesListRenderConfig();
  }, [])

  useEffect(() => {
    return window.removeEventListener('resize', getMoviesListRenderConfig);
  }, [])

  useEffect(() => {
    setShownMovies([])
    movies.length < maxAmountOfCard + 1 ? setShownMovies(movies) : setShownMovies(movies.slice(0, maxAmountOfCard));
    // шаг: 3 фильма. 12/3 = 4
    setCounter(4)
  }, [movies, maxAmountOfCard])

  function getMoviesListRenderConfig() {
    const width = document.documentElement.clientWidth;
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
          .map((item, idx) => (
            <li className="movies-card__item" key={idx}>
              <MoviesCard movie={item} isOpenSavedMovies={isOpenSavedMovies} />
            </li>
          ))
        }
      </ul>
      {movies.length !== shownMovies.length && <button type="button" className="btn movies-card__more-btn" onClick={addMovies}>Еще</button>}
    </div>
  );
}

export default MoviesCardList;