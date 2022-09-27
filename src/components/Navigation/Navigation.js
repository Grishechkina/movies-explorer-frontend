import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
      <nav className="navigation">
      <NavLink to="/movies" className="link">
        Фильмы
      </NavLink>
      <NavLink to="/saved-movies" className="link">
        Сохранённые фильмы
      </NavLink>
    </nav>
    );
}

export default Navigation;