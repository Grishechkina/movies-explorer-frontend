import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function Movies() {
  const loading = false;
  return (
    <>
    <SearchForm />
    {loading && <Preloader />}
    <MoviesCardList />
    </>
  )
}

export default Movies;