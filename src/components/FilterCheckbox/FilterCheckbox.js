function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <input className="filter-checkbox__input" type="checkbox" name="short-films" />
      <span className="filter-checkbox__custom"></span>
      <span className="filter-checkbox__text">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;