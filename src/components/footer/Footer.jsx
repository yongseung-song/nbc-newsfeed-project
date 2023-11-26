import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <StFooter>
      <StIndexWrapper>
        footer
        <br />
        footer
      </StIndexWrapper>
    </StFooter>
  );
}

export default Footer;

const StFooter = styled.footer`
  width: 100%;
  height: 100px;
  background-color: green;
`;

const StIndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
