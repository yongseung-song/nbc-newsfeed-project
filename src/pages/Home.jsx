import { getAuth } from "firebase/auth";
import React, { useContext } from "react";
import styled from "styled-components";
import Main from "../components/main/Main";
import Sidebar from "../components/sidebar/Sidebar";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  if (getAuth().currentUser) {
    console.log(getAuth().currentUser.displayName);
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
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 24px;
`;
