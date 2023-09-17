import { createGlobalStyle } from "styled-components";

export const colors = {
    dark: '#333',
    primmary: '#fb1',
    secondary: '#764701',
    hover: '#fea'
}

export const typography = {
    sanSerif: 'Helvetica, Arial, sans-serif',
    serif: 'Spectral, Georgia'
}

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0px;
        color: ${colors.dark};
        font-family: ${typography.sanSerif};
        padding-top: 4rem;
    }

    h1, h2, h3, h4, p {
        margin: 0px;
    }

    ul, li {
        list-style: none;
        padding: 0px;
        margin: 0px;
    }

    img {
        display: block;
        max-width: 100%;
    }

    button, input {
        display: block;
        font-size: 1rem;
        font-family: ${typography.sanSerif};
        color: ${colors.dark};
    }

    a {
        text-decoration: none;
        color: ${colors.dark};
    }

    .title {
        font-family: ${typography.serif};
        line-height: 1;
        font-size: 3rem;
        margin: 1rem 0;
        position: relative;
        z-index: 1;

        &::after {
            content: '';
            display: block;
            width: 1.5rem;
            height: 1.5rem;
            background-color: ${colors.primmary};
            position: absolute;
            bottom: 5px;
            left: -5px;
            border-radius: .2rem;
            z-index: -1;
        }
    }
    .container {
        max-width: 50rem;
        padding: 0 1rem;
        margin: 0 auto;
    }

    .animeLeft{
        opacity: 0;
        transform: translateX(-20px);
        animation: animeLeft .3s forwards;
    }

    @keyframes animeLeft {
        to {
            opacity: 1;
            transform: initial;
        }
    }
`
