import { useState, useEffect } from 'react';

function FilterCheckbox({ onCheckBoxClick, initState }) {

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(initState)
  }, [initState])

  function toggleCheckbox() {
    setIsChecked(!isChecked);
    onCheckBoxClick(!isChecked);
  }

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox_text">
        <input className="filter-checkbox_input" type="checkbox" id="short" name="short-films" checked={isChecked} onChange={toggleCheckbox} />
        <span className="visible-checkbox"></span>
        <span className="filter-checkbox_text">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;