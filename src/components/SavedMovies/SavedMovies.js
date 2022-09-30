import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  const loading = false;
  return (
    <section>
      <SearchForm />
      {loading && <Preloader />}
      <MoviesCardList isOpenSavedMovies="true" />
    </section>
  )
}

export default SavedMovies;