import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Home from './pages/Home';
import Login from './pages/Login';

import { GlobalStyle } from './styles';


function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login/*' element={<Login />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
