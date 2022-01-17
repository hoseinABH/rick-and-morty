import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
body {
    background-color:${({ theme }) => theme.palette.bgColor};
    color: white;
}

* {
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family: 'Poppins', sans-serif;
}


`;
