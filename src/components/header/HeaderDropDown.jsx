import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authService } from "../../firebase";
import { colors } from "../../styles/GlobalColors";

function HeaderDropDown() {
  const navigate = useNavigate();

  const clickLogoutBtnHandler = () => {
    authService.signOut();
    navigate("/");
  };

  return (
    <StDropDownContainer>
      <button
        onClick={() => {
          navigate("mypage");
          // window.location.reload();
        }}
      >
        마이페이지
      </button>
      <button onClick={clickLogoutBtnHandler}>로그아웃</button>
    </StDropDownContainer>
  );
}

export default HeaderDropDown;

const StDropDownContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  display: flex;
  flex-direction: column;
`;

const StHeaderBtn = styled.button`
  background-color: ${colors.mainColor};
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 99px;
  margin-left: 10px;
  font-weight: 700;
`;
