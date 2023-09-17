import styled from "styled-components";

export const PhotoPostContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;

    .file {
        margin-bottom: 1rem;
    }
`

export const PreviewPhoto = styled.div`
    border-radius: 1rem;
    background-size: cover;
    background-position: center center;

    &::after{
        content: '';
        display: block;
        height: 0px;
        padding-bottom: 100%;
    }
`