import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function Movies() {
  const loading = false;
  return (
    <section>
    <SearchForm />
    {loading && <Preloader />}
    <MoviesCardList />
    </section>
  )
}

export default Movies;