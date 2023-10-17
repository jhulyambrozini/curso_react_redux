import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';
import Photo from './pages/Photo';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound/NotFound';

import { GlobalStyle } from './styles';
import ProtectedRouter from './helpers/ProtectedRouter';

import { autoLoginAsync } from './store/reducers/user';
import { useAppDispatch } from './store';

function App() {
  const dispatch = useAppDispatch()
  const token = window.localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      dispatch(autoLoginAsync(token));
    }
  }, [token, dispatch]);

  return (
   
    <div className="App">
      <BrowserRouter>
          <GlobalStyle />
          <Header />
          <main className="AppBody">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="login/*"
                element={<Login />}
              />
              <Route
                path="account/*"
                element={
                  <ProtectedRouter>
                    <User />
                  </ProtectedRouter>
                }
              />
              <Route
                path="photo/:id"
                element={<Photo />}
              />
              <Route
                path="profile/:user"
                element={<Profile />}
              />
              <Route
                path="*"
                element={<NotFound />}
              />
            </Routes>
          </main>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
