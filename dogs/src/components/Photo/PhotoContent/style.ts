import styled from "styled-components"
import ViwewsIcon from '../../../assets/visualizacao-black.svg'
import { colors } from "../../../styles"

export const PhotoContainer = styled.div`
    margin: auto;
    height: 36rem;
    border-radius: .2rem;
    background-color: white;
    display: grid;
    grid-template-columns: 36rem 20rem;
    grid-template-rows: auto 1fr auto;
    overflow: hidden;
    transform: scale(.8);
    animation: scaleUp 0.3s forwards;

    @keyframes scaleUp {
        to {
            opacity: 1;
            transform: 1;
        }
    }

    @media (max-width: 64rem) {
        height: auto;
        max-height: calc(100vh - 4rem);
        overflow-y: auto;
        grid-template-columns: minmax(20rem, 40rem);
    }
`

export const ImageContainer = styled.div`
    grid-row: 1/4;

    @media (max-width: 64rem) {
        grid-row: 1;
    }
`

export const DatailsContainer = styled.div`
    padding: 2rem 2rem 0 2rem;
`

export const Viwes = styled.span`
    &::before{
        content: '';
        display: inline-block;
        width: 16px;
        height: 10px;
        margin-right: .5rem;
        background: url(${ViwewsIcon});
    }
`
export const AttributesList = styled.ul`
    display: flex;
    font: 1.125rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 2rem;

    li {
        margin-right: 2rem;

        &::before{
            content: '';
            display: inline-block;
            height: 20px;
            margin-right: .5rem;
            position: relative;
            top: 3px;
            width: 2px;
            background-color: ${colors.dark};
            margin-top: 5px;
        }
    }
`

export const Author = styled.p`
    opacity: 0.5;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a:hover {
        text-decoration: underline;
    }
`