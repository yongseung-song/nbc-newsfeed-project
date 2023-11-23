import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Main from "../components/main/Main";
import Sidebar from "../components/sidebar/Sidebar";
import { app } from "../firebase";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

const StHomeContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 24px;
`;

function Home() {
  console.log("app", app);

  return (
    <StHomeContainer>
      <Sidebar />
      <Main />
    </StHomeContainer>
  );
}

export default Home;
