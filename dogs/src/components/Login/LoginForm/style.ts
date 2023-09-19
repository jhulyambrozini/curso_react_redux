import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { typography } from '../../../styles';

export const LoginFormStyle = styled.form`
  margin-bottom: 2rem;
`;

export const LinkLost = styled(Link)`
  display: inline-block;
  color: #666;
  padding: 0%.5rem 0;
  line-height: 1;

  &::after {
    content: '';
    height: 2px;
    width: 100%;
    background: currentColor;
    display: block;
  }
`;

export const CreateAccount = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;

  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  h2 {
    font-family: ${typography.serif};
    line-height: 1;
    font-size: 2rem;

    &::after {
      content: '';
      display: block;
      background-color: #ddd;
      height: 0.5rem;
      width: 3rem;
      border-radius: 0.2rem;
    }
  }
`;
