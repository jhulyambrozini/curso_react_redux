import styled from 'styled-components';
import { colors, typography } from '../../../styles';

export const ButtonDeletePhoto = styled.button`
  background-color: #ddd;
  padding: 0.3rem 0.6rem;
  line-height: 1;
  border: 1px solid transparent;
  font-size: 0.875rem;
  font-family: ${typography.sanSerif};
  cursor: pointer;
  border-radius: 0.4rem;
  transition: 0.1s;

  &:hover,
  &:focus {
    background-color: white;
    outline: none;
    box-shadow: 0 0 0 3px #eee;
    border-color: ${colors.dark};
  }
`;
