import styled from 'styled-components';
import { colors, typography } from '../../../styles';

type PropsOnlySingle = {
  single: boolean;
};

export const CommentForm = styled.form<PropsOnlySingle>`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: ${(props: PropsOnlySingle) => (props.single ? '1rem 0' : '1rem')};
`;

export const CommentTextarea = styled.textarea`
  display: block;
  width: 100%;
  border: 1px solid #eee;
  border-radius: 0.2rem;
  font-size: 1rem;
  font-family: ${typography.sanSerif};
  resize: none;
  padding: 0.5rem;
  background-color: #eee;
  transition: 0.2s;

  &:focus,
  &:hover {
    outline: none;
    border-color: ${colors.primmary};
    background-color: white;
    box-shadow: 0 0 0 3px ${colors.hover};
  }
`;

export const CommentButton = styled.button`
  border: none;
  cursor: pointer;
  color: ${colors.dark};
  background: transparent;
  font-size: 1rem;
  padding: 0 1rem;
  overflow: hidden;

  &:focus svg path,
  &:hover svg path {
    fill: ${colors.hover};
    stroke: ${colors.primmary};
  }

  &:focus svg g,
  &:hover svg g {
    animation: bark 0.6s infinite;
  }

  @keyframes bark {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
