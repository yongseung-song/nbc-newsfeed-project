import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const TYPEFACE = "Pretendard-Regular";

const GlobalFonts = styled.createGlobalStyle`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  body * {
    font-family: ${TYPEFACE};
  }
`;

export default GlobalFonts;
