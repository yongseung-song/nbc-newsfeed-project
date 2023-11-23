import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const ModalWrapper = styled.div`
  z-index: 2;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0001;
  /* filter: blur(4px); */
  animation: ${({ visible }) =>
    visible
      ? css`
          ${fadeIn} 0.2s ease-in-out
        `
      : css`
          ${fadeOut} 0.2s ease-in-out
        `};

  div {
    width: 300px;
    height: 180px;
    display: flex;
    margin-top: -100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0px 3px 8px #0002;
  }
  div button {
    display: block;
  }
`;
