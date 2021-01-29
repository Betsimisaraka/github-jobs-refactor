import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
    }
    body {
        background: #F6F7FB;
        border-radius: 12px;
    }
    p, h3, ul {
        margin: 0;
        padding: 0;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
`;