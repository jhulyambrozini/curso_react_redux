import styled from 'styled-components';

type PropsOnlySingle = {
  single: boolean;
};
export const CommentsList = styled.ul<PropsOnlySingle>`
  word-break: break-word;
  padding: ${(props: PropsOnlySingle) => (props.single ? '0' : '0 2rem')};

  li {
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }
`;
