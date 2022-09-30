import React, { useState } from 'react';
import Menu from './Menu/Menu';

function BurgerNavigation() {
  const [isNavOpen, setNavOpen] = useState(false);
  function toggleMenuState() {
    setNavOpen(!isNavOpen)
  }
  return (
    <div className="burger">
      <button type="button" className="burger__button btn" onClick={toggleMenuState}></button>
      <Menu isOpen={isNavOpen} onClose={toggleMenuState} />
    </div>
  );
}

export default BurgerNavigation;