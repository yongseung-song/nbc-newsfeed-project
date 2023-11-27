import React, { useContext, useState } from "react";
import styled from "styled-components";
import LightBtn from "../../assets/lightButton.png";
import { AuthContext } from "../../context/AuthContext";
import { ModalContext } from "../../context/ModalContext";
import { authService } from "../../firebase";
import { colors } from "../../styles/GlobalColors";
import HeaderAuthModal from "./HeaderAuthModal";
import HeaderDropDown from "./HeaderDropDown";

function HeaderAuthMenu() {
  const name = authService?.currentUser?.displayName;
  const userAvatarUrl = authService?.currentUser?.photoURL;

  const [showDropDown, setShowDropDown] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);
  const { showModal, setShowModal } = useContext(ModalContext);

  // console.log(name);

  const loginModalHandler = () => {
    setShowModal(true);
  };

  const dropDownMenuCloseHandler = () => {
    setTimeout(() => {
      setShowDropDown(false);
    }, 200);
  };
  const dropDownMenuOpenHandler = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <>
      <StAuthCWrapper>
        {isLoggedIn ? (
          <StAuthMenu>
            <StDropDownBtn
              onBlur={dropDownMenuCloseHandler}
              onClick={dropDownMenuOpenHandler}
              $userAvatarUrl={userAvatarUrl}
            />
            <p>{name ?? "guest"}님</p>
            {showDropDown ? <HeaderDropDown /> : ""}
          </StAuthMenu>
        ) : (
          <StHeaderBtn onClick={loginModalHandler}>로그인</StHeaderBtn>
        )}
        <StLightBtn></StLightBtn>
      </StAuthCWrapper>
      {showModal && <HeaderAuthModal />}
    </>
  );
}

export default HeaderAuthMenu;

const StAuthMenu = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StHeaderBtn = styled.button`
  background-color: ${colors.mainColor};
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 99px;
  margin-left: 10px;
  font-weight: 700;
  cursor: pointer;
`;

const StLightBtn = styled.button`
  background-color: ${colors.mainColor};
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 99px;
  margin-left: 10px;
  font-weight: 700;
  background-image: url(${LightBtn});
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: center;
  height: 32px;
  cursor: pointer;
`;

const StAuthCWrapper = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const StDropDownBtn = styled.button`
  background-image: url(${(props) => props.$userAvatarUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 0;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  cursor: pointer;
  border: none;
`;
