import { getAuth } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";
import { ModalContext } from "../../context/ModalContext";
import * as St from "./Header.style";
import HeaderAuthModal from "./HeaderAuthModal";
import HeaderDropDown from "./HeaderDropDown";

function HeaderAuthMenu() {
  const name = getAuth()?.currentUser?.displayName;
  const userAvatarUrl = getAuth()?.currentUser?.photoURL;
  const navigate = useNavigate();

  const { showDropDown, setShowDropDown } = useState(false);
  const { isLoggedIn } = useContext(AuthContext);
  const { showModal, setShowModal } = useContext(ModalContext);

  const loginModalHandler = () => {
    setShowModal(true);
  };

  return (
    <>
      <div>
        <button>darkmode</button>
        {isLoggedIn ? (
          <StAuthMenu onClick={() => {}}>
            <p>{name ?? "guest"}님</p>
            <St.DropDownBtn src={userAvatarUrl} />
            <HeaderDropDown />
          </StAuthMenu>
        ) : (
          <button onClick={loginModalHandler}>로그인하기</button>
        )}
      </div>
      {showModal && <HeaderAuthModal />}
    </>
  );
}

export default HeaderAuthMenu;

const StAuthMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
