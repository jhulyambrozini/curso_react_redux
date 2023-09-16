import { Link } from 'react-router-dom';

import userIcon from '../../assets/usuario.svg';
import { ReactComponent as DogSvg } from '../../assets/dogs.svg';
import { HeaderContainer, LinkLogin, Login, Nav } from './style';

const Header = () => {
  return (
    <HeaderContainer>
      <Nav className="container">
        <Link
          className="logo"
          to="/"
          title="Clique aqui para ir para o início"
        >
          {<DogSvg />}
        </Link>
        <LinkLogin>
          <Login
            to="/login"
            title="Clique aqui para ir para o início"
          >
            Login / Criar
          </Login>
          <img
            src={userIcon}
            alt="icon de usuário"
          />
        </LinkLogin>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
