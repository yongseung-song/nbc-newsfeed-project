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
      <StHeaderBtn
        onClick={() => {
          navigate("mypage");
          // window.location.reload();
        }}
      >
        마이페이지
      </StHeaderBtn>
      <StHeaderBtn onClick={clickLogoutBtnHandler}>로그아웃</StHeaderBtn>
    </StDropDownContainer>
  );
}

export default HeaderDropDown;

const StDropDownContainer = styled.div`
  position: absolute;
  width: 120px;
  top: 42px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #eee;
  padding: 8px;
  border-radius: 12px;
`;

const StHeaderBtn = styled.button`
  background-color: ${colors.mainColor};
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 99px;
  /* margin-left: 10px; */
  font-weight: 700;
`;
