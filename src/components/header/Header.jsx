import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "../../pages/SignIn.jsx";
import * as St from "./Header.style.jsx";
import ModalBasic from "../../components/header/ModalBasic.jsx";
import { ModalContext } from "../../context/ModalContext.js";
import Button from "../../shared/button/Button.jsx";
import SignUp from "../../pages/SignUp.jsx";

function Header() {
  const [hasAccount, setHasAccount] = useState(true);
  const { showModal, setShowModal } = useContext(ModalContext);

  const loginModalHandler = () => {
    setShowModal(true);
  };

  return (
    <St.Header>
      <Link to="/">home</Link>
      <form action="submit">
        <label htmlFor="search">검색</label>
        <input id="search" name="search" type="text" />
      </form>
      <St.BtnContainer>
        <button>darkmode</button>
        <Button clickBtnHandler={loginModalHandler}>로그인</Button>
        {showModal && (
          <>
            {hasAccount ? (
              <ModalBasic
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                setShowModal={setShowModal}
              >
                <SignIn setShowModal={setShowModal} />
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
