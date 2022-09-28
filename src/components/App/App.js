import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import { Routes, Route,useLocation } from 'react-router-dom'

function App() {
  const path = useLocation().pathname;

  let isLoggedIn = path !== '/sign-up' && path !== '/sign-in'
  const needShowFooter = isLoggedIn && path !== '/profile'
  return (
    <div className="page">
      {isLoggedIn && <Header />}
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
      {needShowFooter && <Footer />}
    </div>
  );
}

export default App;