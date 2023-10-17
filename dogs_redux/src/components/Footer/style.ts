import styled from 'styled-components';
import { colors } from '../../styles';

export const FooterContainer = styled.footer`
  background-color: ${colors.primmary};
  padding: 3rem 1rem 0 1rem;
  height: 10rem;
  text-align: center;
  color: ${colors.secondary};

  p {
    margin-top: 1rem;
  }
`;
