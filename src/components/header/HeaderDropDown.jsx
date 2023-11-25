import React from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../firebase";

function HeaderDropDown() {
  console.log("test");
  const navigator = useNavigate();

  const clickLogoutBtnHandler = () => {
    authService.signOut();
    navigator("/");
  };

  return (
    <div>
      <button onClick={() => navigator("mypage")}>마이페이지</button>
      <button onClick={clickLogoutBtnHandler}>로그아웃</button>
    </div>
  );
}

export default HeaderDropDown;
