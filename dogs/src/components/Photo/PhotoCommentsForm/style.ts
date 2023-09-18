import styled from "styled-components";
import { colors, typography } from "../../../styles";

export const CommentForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: stretch;
    margin: 1rem;
`

export const CommentTextarea = styled.textarea`
    display: block;
    width: 100%;
    border: 1px solid #eee;
    border-radius: .2rem;
    font-size: 1rem;
    font-family: ${typography.sanSerif};
    resize: none;
    padding: .5rem;
    background-color: #eee;
    transition: .2s;

    &:focus, &:hover {
        outline: none;
        border-color: ${colors.primmary};
        background-color: white;
        box-shadow: 0 0 0 3px ${colors.hover};
    }
`

export const CommentButton = styled.button`
    border: none;
    cursor: pointer;
    color: ${colors.dark};
    background: transparent;
    font-size: 1rem ;
    padding: 0 1rem;
    overflow: hidden;

    &:focus svg path, &:hover svg path {
        fill: ${colors.hover};
        stroke: ${colors.primmary};
    }

    &:focus svg g, &:hover svg g {
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
`