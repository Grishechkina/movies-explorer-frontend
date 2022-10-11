import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import * as auth from '../../utils/auth'
import api from '../../utils/MainApi'
import { authErrors, profileErrors } from '../../utils/constants';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import ProtectedRoute from '../../utils/ProtectedRoute';

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [authError, setAuthError] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [updateProfileStats, setUpdateProfileStats] = useState({})
  const [savedMovies, setSavedMovies] = useState([])

  const navigation = useNavigate();

  const path = useLocation().pathname;

  useEffect(() => {
    tokenCheck()
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      api.getSavedMovies()
        .then(res => setSavedMovies(res))
        .catch(err => console.log(err))
    }
  }, [isLoggedIn])

  function tokenCheck() {
    api.getUserInfo()
      .then((res) => {
        if (res) {
          navigation('/movies')
          setIsLoggedIn(true);
          setCurrentUser(res)
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }

  function handleLogin({ email, password }) {
    setIsLoading(true)
    auth.authorize(email, password)
      .then((data) => {
        if (data.token) {
          tokenCheck()
        }
      })
      .catch(err => {
        if (err.statusCode === 401) {
          setAuthError(authErrors.wrongData);
        } else {
          setAuthError(authErrors.generalError);
        }
      })
      .finally(() => setIsLoading(false));
  }

  function handleUpdateUser(user) {
    setIsLoading(true)
    api.editUserInfo(user)
      .then(res => {
        setCurrentUser(res)
        setUpdateProfileStats({ type: 'success', text: 'Профиль успешно обновлен' });
      })
      .catch(err => {
        if (err.statusCode === 409) {
          setUpdateProfileStats({ type: 'error', text: profileErrors.emailError });
        } else {
          setUpdateProfileStats({ type: 'error', text: profileErrors.generalError });
        }
      })
      .finally(() => setIsLoading(false))
  }

  function handleRegistration({ email, password, name }) {
    setIsLoading(true)
    auth.register(email, password, name)
      .then((res) => handleLogin({ email, password }))
      .catch((err) => {
        if (err.statusCode === 409) {
          setAuthError(authErrors.emailError);
        } else {
          setAuthError(authErrors.generalError);
        }
      })
      .finally(() => setIsLoading(false));
  }

  function handleProfileSignOut() {
    auth.signout()
    setIsLoggedIn(false)
    localStorage.removeItem('keywords');
    localStorage.removeItem('initialMovies');
    localStorage.removeItem('shortMovie');
  }

  function clearErrorMessages() {
    !(Object.keys(updateProfileStats).length === 0) && setUpdateProfileStats({});
    authError && setAuthError('');
  };

  return (
    <div className="page" >
      <CurrentUserContext.Provider value={currentUser}>
        <Header isLoggedIn={isLoggedIn} />
        <main>
          <Routes>
            <Route
              path="/sign-up"
              element={<Register onSubmit={handleRegistration} error={authError} clearErors={clearErrorMessages} />}
            />
            <Route
              path="/sign-in"
              element={<Login onSubmit={handleLogin} error={authError} clearErors={clearErrorMessages} />}
            />
            <Route
              path='/'
              element={
                <Main />
              } />
            <Route
              path="/movies"
              element={<ProtectedRoute isLoggedIn={isLoggedIn}><Movies savedMovies={savedMovies}/></ProtectedRoute>}
            />
            <Route
              path="/saved-movies"
              element={<ProtectedRoute isLoggedIn={isLoggedIn}><SavedMovies savedMovies={savedMovies}/></ProtectedRoute>}
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile onSubmit={handleUpdateUser} onSignout={handleProfileSignOut}
                    clearErors={clearErrorMessages} updateProfileStats={updateProfileStats} />
                </ProtectedRoute>}
            />
            <Route
              path="/*"
              element={<NotFoundPage />}
            />
          </Routes>
        </main>
        {isLoggedIn && path !== '/profile' && <Footer />}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;