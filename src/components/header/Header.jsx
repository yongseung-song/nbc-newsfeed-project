import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignIn from "../../pages/SignIn.jsx";
import * as St from "./Header.style.jsx";
import ModalBasic from "../../components/header/ModalBasic.jsx";
import { ModalContext } from "../../context/ModalContext.js";
import Button from "../../shared/button/Button.jsx";
import SignUp from "../../pages/SignUp.jsx";
import DropdownIcon from "../../assets/free-icon-down-arrows-2268472.png";
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
        {!hasAccount ? (
          <Button clickBtnHandler={loginModalHandler}>로그인</Button>
        ) : (
          <div>
            <img
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                position: "absolute",
                // margin: "0 0 0 -100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              src="https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288870.jpg?size=338&ext=jpg&ga=GA1.2.386372595.1697587200&semt=ais"
              alt="프로필 이미지"
            />
            <img
              style={{
                margin: "50px 0 0 100px",
              }}
              src={`${DropdownIcon}`}
              alt="드롭다운 아이콘"
            />
          </div>
        )}

        <button onClick={loginModalHandler}>login</button>
        <St.DropDownBtn
          onClick={() => {
            navigate("mypage");
          }}
          src={userAvatarUrl}
        />
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
