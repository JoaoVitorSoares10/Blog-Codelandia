import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --blue: #3EA1DB;
        --blue-dark: #574AE8;
        --white: #FFF;

        --title: #313131;
        --text: #B6B6B6;
        
        --linear: linear-gradient(90deg, #574AE8 0%, #3EA1DB 100%);

        --background: #f3f3f3;
    }

    body {
        background: var(--background);
    }

    html {
        @media (max-width: 1080px) {
            font-size: 98.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    p, h1, h2, h3, article, a{
        font-weight: 400;
        font-family: 'Lexend Deca', sans-serif;
    }

    * {
        box-sizing: boder-box;
        padding: 0;
        margin: 0;
    }
`;