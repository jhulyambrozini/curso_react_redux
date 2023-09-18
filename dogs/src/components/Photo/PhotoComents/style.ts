import styled from "styled-components";

type PropsOnlySingle = {
    single: boolean
}
export const CommentsList = styled.ul<PropsOnlySingle>`
    overflow-y: auto;
    word-break: break-word;
    padding: ${props => props.single ? '0' : '0 2rem'};

    li {
        margin-bottom: .5rem;
        line-height: 1.2;
    }
`