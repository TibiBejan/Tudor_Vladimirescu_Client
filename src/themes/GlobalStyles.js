import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        visibility: hidden;
        font-size: 62.5%;
        font-weight: 300;
        scroll-behavior: smooth;
        -ms-scroll-snap-type: antialiased;
        scroll-snap-type: antialiased;
        background-color: ${props => props.theme.colors.white};

        @media screen and (max-width: ${props => props.theme.breakpoints.large}) {
            font-size: 50%;
        }
    }

    body {
        visibility: hidden;
        font-family: ${props => props.theme.fonts.main};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
        min-height: 100vh;
        width: 100%;
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.black};
    }

    ol, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    button {
        outline: none;
        border: none;
        background-color: transparent;
        border-radius: 0;
        cursor: pointer;
    }

    input, 
    select,
    textarea {
        -webkit-appearance: none;
        border-radius: 0;
        outline: none;
        border: none;
    }

    ::-moz-selection { /* Code for Firefox */
       color: ${props => props.theme.colors.white};
       background: ${props => props.theme.colors.primaryYellow};
    }

    ::selection {
       color: ${props => props.theme.colors.white};
       background: ${props => props.theme.colors.primaryYellow};
    }
`;

export default GlobalStyles;