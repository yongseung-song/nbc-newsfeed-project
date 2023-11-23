import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Main from "../components/main/Main";
import Sidebar from "../components/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { AuthContext } from "../context/AuthContext";
import { getAuth } from "firebase/auth";

const StHomeContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 24px;
`;

function Home() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    console.log(user.uid, user.displayName);
  } else {
    console.log("none");
  }

  // console.log("app", app);
  // console.log(isLoggedIn);
  const dates = Array(5).fill(dayjs().toJSON());
  // console.log(dates);
  return (
    <StHomeContainer>
      <Sidebar />
      <Main />
    </StHomeContainer>
  );
}

export default Home;
