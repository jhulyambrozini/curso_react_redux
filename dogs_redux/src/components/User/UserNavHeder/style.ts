import styled from 'styled-components';
import { colors } from '../../../styles';

export const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a,
  button {
    background-color: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;
  }

  a:hover,
  a:focus,
  button:hover,
  button:focus {
    background-color: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: ${colors.dark};
    outline: none;
  }

  a.active {
    background-color: white;
    box-shadow: 0 0 0 3px ${colors.hover};
    border-color: ${colors.primmary};
  }

  a.active svg > * {
    fill: ${colors.primmary};
  }
`;

export const MobileButton = styled.button`
  background-color: #eee;
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;
  padding: 0px;

  &::after {
    content: '';
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background-color: currentColor;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
  }

  &:focus,
  &:hover {
    outline: none;
    background-color: white;
    box-shadow: 0 0 0 3px ${colors.hover};
    border-color: ${colors.primmary};
    color: ${colors.primmary};
  }
`;
