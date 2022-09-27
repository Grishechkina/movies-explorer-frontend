import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  const loading = false;
  return (
    <>
    <SearchForm />
    {loading && <Preloader />}
    <MoviesCardList isOpenSavedMovies="true"/>
    </>
  )
}

export default SavedMovies;