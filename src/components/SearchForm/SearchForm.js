import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <form className="search-form">
      <input
        type="text"
        className="search-form__input"
        name="film"
        required
        placeholder="Фильм"
      />
      <button
        className="search-form__button"
        type="submit"
      ></button>
      <FilterCheckbox className="search-form__checkbox"/>
    </form>
  );
}

export default SearchForm;