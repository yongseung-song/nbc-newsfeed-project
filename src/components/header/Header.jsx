import React from "react";
import { Link } from "react-router-dom";
import ModalBasic from "../../components/header/ModalBasic.jsx";
import * as St from "./Header.style.jsx";

function Header() {
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
<<<<<<<<< Temporary merge branch 1
         clickBtnHandler={loginModalHandler}>로그인</Button>
=========
        <button onClick={loginModalHandler}>login</button>
        <St.DropDownBtn
          onClick={() => {
            navigate("mypage");
          }}
          src={userAvatarUrl}
        />
>>>>>>>>> Temporary merge branch 2
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
