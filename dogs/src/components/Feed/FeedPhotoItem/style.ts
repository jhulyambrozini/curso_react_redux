import styled from "styled-components";
import viewsIcon from '../../../assets/visualizacao.svg'

export const Views = styled.span`
    grid-area: 1/1;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: none;

   &::before{
    content: '';
    display: inline-block;
    margin-right: .25rem;
    width: 16px;
    height: 10px;
    background: url(${viewsIcon}) no-repeat;
   }
`

export const PhotoItem = styled.li`
    display: grid;
    border-radius: .2rem;
    overflow: hidden;
    cursor: pointer;

    &:nth-child(2) {
        grid-column: 2 /4;
        grid-row: span 2;

        @media (max-width: 40rem) {
            grid-column: initial;
            grid-row: initial;
        }
    }

    img {
        grid-area: 1/1;
    }

    &:hover ${Views} {
        display: flex;
    }
`