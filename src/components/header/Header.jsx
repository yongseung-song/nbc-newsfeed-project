import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "../../pages/SignIn.jsx";
import * as St from "./Header.style.jsx";
import ModalBasic from "../../shared/modalBasic/ModalBasic.jsx";
import { ModalContext } from "../../context/ModalContext.js";
import { app, authService } from "../../firebase.js";
import { getAuth } from "firebase/auth";

function Header() {
  const { showModal, setShowModal } = useContext(ModalContext);

  const loginModalHandler = () => {
    setShowModal(true);
  };

  // console.log(getAuth().currentUser?.photoURL);
  const userAvatarUrl = getAuth()?.currentUser.photoURL;

  return (
    <St.Header>
      <Link to={"/"}>home</Link>
      <form action="submit">
        <label htmlFor="search">검색</label>
        <input id="search" name="search" type="text" />
      </form>
      <St.BtnContainer>
        <button>darkmode</button>
        <button onClick={loginModalHandler}>login</button>
        <St.DropDownBtn src={userAvatarUrl} />
        {showModal && (
          <ModalBasic setShowModal={setShowModal}>
            <SignIn setShowModal={setShowModal} />
          </ModalBasic>
        )}
      </St.BtnContainer>
    </St.Header>
  );
}

export default Header;
