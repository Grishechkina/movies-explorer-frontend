import { useState, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onClick, initialSearchStr = '', isShort }) {
  const [searchStr, setSearchStr] = useState('');
  const [filmError, setFilmError] = useState('');
  const [needShortFilmFilter, setNeedShortFilmFilter] = useState(false);

  useEffect(() => {
    setSearchStr(initialSearchStr)
    setNeedShortFilmFilter(isShort)
  }, [initialSearchStr, isShort])

  useEffect(() => {
    if (searchStr.length) {
    onClick(searchStr, needShortFilmFilter);
    }
  }, [needShortFilmFilter])

  function onChange(e) {
    setSearchStr(e.target.value);
    if (e.target.value.length === 0) {
      setFilmError('Нужно ввести ключевое слово.');
    } else {
      setFilmError('');
    }
  }

  function handleButtonClick(e) {
    e.preventDefault();
    onClick(searchStr, needShortFilmFilter, true);
  }

  return (
    <form className="search-form">
      <input
        type="text"
        className="search-form__input"
        name="film"
        required
        placeholder="Фильм"
        value={searchStr}
        onChange={onChange}
      />
      <span className="search-form__error">{filmError}</span>
      <button
        disabled={!searchStr}
        onClick={handleButtonClick}
        className="btn search-form__button"
        type="submit"
      ></button>
      <FilterCheckbox className="search-form__checkbox" onCheckBoxClick={setNeedShortFilmFilter} initState={needShortFilmFilter} />
      <h1>{!!searchStr}</h1>
    </form>
  );
}

export default SearchForm;