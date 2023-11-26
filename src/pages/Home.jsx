import React, { useContext } from "react";
import styled from "styled-components";
import Main from "../components/main/Main";
import Sidebar from "../components/sidebar/Sidebar";
import { AuthContext } from "../context/AuthContext";
import { authService } from "../firebase";

function Home() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  if (authService.currentUser) {
    console.log(authService.currentUser.displayName);
  } else {
    console.log("none");
  }

  return (
    <StHomeContainer>
      <Sidebar />
      <Main />
    </StHomeContainer>
  );
}

export default Home;

const StHomeContainer = styled.div`
  position: relative;
  padding-top: 24x;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 24px;
  padding-top: 16px;
  background: linear-gradient(
      127deg,
      rgba(32, 117, 255, 0.8),
      rgba(0, 255, 0, 0) 70.71%
    ),
    linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
`;
