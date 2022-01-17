import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400&display=swap');
body {
    background-color:black;
    color: white;
}

* {
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family: "Dongle", sans-serif;
    font-weight: 300;
}

`;
