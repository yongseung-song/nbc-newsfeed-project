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
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  li {
    list-style: none;
  }
`;

export default GlobalStyles;
