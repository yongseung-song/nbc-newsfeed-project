import React, { useState } from "react";
import ModalBasic from "../modal/ModalBasic";
import HeaderAuthModalSignIn from "./HeaderAuthModalSignIn";
import HeaderAuthModalSignUp from "./HeaderAuthModalSignUp";

function HeaderAuthModal() {
  const [mode, setMode] = useState("signIn");

  const handleClickGoToSignUp = () => setMode("signUp");

  return (
    <ModalBasic>
      {mode === "signIn" ? (
        <HeaderAuthModalSignIn onClickGoToSignUp={handleClickGoToSignUp} />
      ) : (
        <HeaderAuthModalSignUp />
      )}
    </ModalBasic>
  );
}

export default HeaderAuthModal;
