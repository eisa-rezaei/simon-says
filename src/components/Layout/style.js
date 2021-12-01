import styled, { createGlobalStyle } from "styled-components";

export const StLayoutContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const GlobalStyle = createGlobalStyle`
*,
::after,
::before{
margin: 0;
padding: 0;
box-sizing: border-box;
}
body{
    user-select: none;
    line-height: 1;
    background-color: #dddfe5;
    font-family: 'Outfit', sans-serif;
}
li{
    list-style: none;
}
a {
    text-decoration: none;
    color: inherit;
}
input{
    outline: none;
    border: none;
    line-height: 1;
}
button {
    background-color: inherit;
    border: none;
    line-height: 1;
}

`;
