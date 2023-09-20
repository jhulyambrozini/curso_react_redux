import { Provider } from 'react-redux';
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

import { UserStorage } from './context/UserContext';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <UserStorage>
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
        </UserStorage>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
