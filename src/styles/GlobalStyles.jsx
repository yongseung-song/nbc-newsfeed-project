import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
  }
  body * {
    box-sizing: border-box;
    /* margin: 0 auto; */
  }
`;

export default GlobalStyles;
