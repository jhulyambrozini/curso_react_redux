import { Link } from 'react-router-dom';

import { ReactComponent as DogSvg } from '../../assets/dogs.svg';
import userIcon from '../../assets/usuario.svg';

import { HeaderContainer, LinkLogin, Login, Nav } from './style';
import { useUser } from '../../context/UserContext';

const Header = () => {
  const { data } = useUser();

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
          {data ? (
            <Login
              to="/account"
              title="Clique aqui para ir para ir para home da conta"
            >
              {data.nome}
            </Login>
          ) : (
            <Login
              to="/login"
              title="Clique aqui para ir para o início"
            >
              Logar/criar
            </Login>
          )}
          <Login
            to="/login"
            title="Clique aqui para ir para a pagina de login"
          ></Login>
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
