import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "../../pages/SignIn.jsx";
import * as St from "./Header.style.jsx";
import ModalBasic from "../../shared/modalBasic/ModalBasic.jsx";
import { Context } from "../../context/Context.js";

function Header() {
  const { showModal, setShowModal } = useContext(Context);

  const loginModalHandler = () => {
    setShowModal(true);
  };

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
