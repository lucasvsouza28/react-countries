import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    background-color: ${props => props.theme.bg.body};
    color: ${props => props.theme.text.black};
    min-height: 100vh;
  }
`;
