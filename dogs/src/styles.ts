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

    .container {
        max-width: 50rem;
        padding: 0 1rem;
        margin: 0 auto;
    }

    a {
        text-decoration: none;
    }
`