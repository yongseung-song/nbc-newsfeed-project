import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignIn from "../../pages/SignIn.jsx";
import * as St from "./Header.style.jsx";
import ModalBasic from "../../components/header/ModalBasic.jsx";
import { ModalContext } from "../../context/ModalContext.js";
import { app, authService } from "../../firebase.js";
import { getAuth } from "firebase/auth";

function Header() {
  const [hasAccount, setHasAccount] = useState(true);
  const { showModal, setShowModal } = useContext(ModalContext);
  const navigate = useNavigate();

  const name = getAuth()?.currentUser?.displayName;

  const loginModalHandler = () => {
    setShowModal(true);
  };

  // console.log(getAuth().currentUser?.photoURL);
  const userAvatarUrl = getAuth()?.currentUser?.photoURL;

  return (
    <St.Header>
      <Link to="/">home</Link>
      <form action="submit">
        <label htmlFor="search">검색</label>
        <input id="search" name="search" type="text" />
      </form>
      <p>{name ?? "guest"}님</p>
      <St.BtnContainer>
        <button>darkmode</button>
        <button onClick={loginModalHandler}>login</button>
        {showModal && (
          <>
            {hasAccount ? (
              <ModalBasic
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                setShowModal={setShowModal}
              >
                <SignIn
                  hasAccount={hasAccount}
                  setHasAccount={setHasAccount}
                  setShowModal={setShowModal}
                />
              </ModalBasic>
            ) : (
              <ModalBasic
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                setShowModal={setShowModal}
              >
                <SignUp setShowModal={setShowModal} />
              </ModalBasic>
            )}
          </>
        )}
      </St.BtnContainer>
    </St.Header>
  );
}

export default Header;
