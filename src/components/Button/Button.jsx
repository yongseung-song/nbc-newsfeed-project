import React from "react";
import styled from "styled-components";

// color: 'primary' | 'secondary' | 'danger' | 'warning'
function Button({ children, onClick: handleClick, color }) {
  return (
    <StyledButton onClick={handleClick} color={color}>
      {children}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  border: 1px solid;
  padding: 0.75rem 2rem;
  font-size: 15px;
  font-family: 600;

  ${(props) => {
    switch (props.color) {
      case "primary":
        return `
          background-color: blue;
          border-color: blue;
          text-color: white;
        `;
      case "secondary":
        return `
          background-color: gray;
          border-color: gray;
          text-color: white;
        `;
      default:
        return `
          background-color: blue;
          border-color: blue;
          text-color: white;
        `;
    }
  }}
`;
