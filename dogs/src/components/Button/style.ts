import styled from "styled-components";
import { colors, typography } from "../../styles";

export const ButtonContainer = styled.button`
    font-family: ${typography.sanSerif};
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background-color: ${colors.primmary};
    color: ${colors.secondary};
    padding: 0.8rem 1.2rem;
    box-sizing: border-box;
    transition: 0.2s;
    min-width: 8rem;

    &:hover, &:focus {
        outline: none;
        box-shadow: 0 0 0 3px ${colors.hover}, 0 0 0 4px ${colors.primmary};
    }

    &:disabled {
        outline: none;
        box-shadow: none;
        cursor: wait;
        opacity: 0.5;
    }
`