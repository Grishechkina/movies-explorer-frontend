import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import moviesApi from '../../utils/moviesApi';

function App() {

  

  const path = useLocation().pathname;
  

  let isLoggedIn = path !== '/sign-up' && path !== '/sign-in'
  const needShowFooter = isLoggedIn && path !== '/profile'

  // function getMovies(searchStr, isShortMovies) {
  //   setMovies([]);
  //   setIsLoading(true);

  // }

  function handleProfileSignOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('keywords');
    localStorage.removeItem('initialMovies');
    localStorage.removeItem('shortMovie');
    // history.push('/');
  }

  return (
    <div className="page">
      {isLoggedIn && <Header />}
      <main>
        <Routes>
          <Route
            path="/sign-up"
            element={<Register />}
          />
          <Route
            path="/sign-in"
            element={<Login />}
          />
          <Route
            path='/'
            element={
              <Main />
            } />
          <Route
            path="/movies"
            element={<Movies />}
          />
          <Route
            path="/saved-movies"
            element={<SavedMovies />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/*"
            element={<NotFoundPage />}
          />
        </Routes>
      </main>
      {needShowFooter && <Footer />}
    </div>
  );
}

export default App;