import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../styles';

export const HeaderContainer = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: white;
  top: 0px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;

  .logo {
    padding: 0.5rem 0;
  }
`;

export const LinkLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  img {
    width: 14px;
    height: 17px;
    position: relative;
    top: -2px;
  }
`;

export const Login = styled(Link)`
  color: ${colors.dark};
`;
