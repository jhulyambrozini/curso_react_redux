import styled from "styled-components";
import { colors } from "../../styles";

export const InputGroup = styled.div`
    margin-bottom: 1rem;

    .error {
        color: #f31;
        font-size: .875rem;
        margin-top: .25rem;
    }
`

export const InputStyle = styled.input`
    border: 1px solid #eee;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: .8rem;
    border-radius: .4rem;
    background-color: #eee;
    transition: .2s;

    &:focus, &:hover {
        outline: none;
        border-color: ${colors.primmary};
        background-color: white;
        box-shadow: 0 0 0 3px ${colors.hover};
    }
`

export const Label = styled.label`
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: .5rem;
`