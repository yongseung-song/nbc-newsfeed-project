import { getAuth } from "firebase/auth";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ModalContext } from "../../context/ModalContext";
import { authService } from "../../firebase";
import * as St from "./Header.style";
import HeaderAuthModal from "./HeaderAuthModal";

function HeaderAuthMenu() {
  const { isLoggedIn } = useContext(AuthContext);
  const name = getAuth()?.currentUser?.displayName;
  const { showModal, setShowModal } = useContext(ModalContext);
  const loginModalHandler = () => {
    setShowModal(true);
  };
  const userAvatarUrl = getAuth()?.currentUser?.photoURL;
  const navigate = useNavigate();

  const clickLogoutBtnHandler = () => {
    authService.signOut();
    navigate("/");
  };

  return (
    <>
      <div>
        <button>darkmode</button>
        {isLoggedIn ? (
          <div>
            <p>{name ?? "guest"}님</p>
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
              src={userAvatarUrl}
              alt="프로필 이미지"
            />
            <St.DropDownBtn
              onClick={() => {
                navigate("mypage");
              }}
              src={userAvatarUrl}
            />
            <button onClick={clickLogoutBtnHandler}>로그아웃</button>
          </div>
        ) : (
          <button onClick={loginModalHandler}>로그인하기</button>
        )}
      </div>
      {showModal && <HeaderAuthModal />}
    </>
  );
}

export default HeaderAuthMenu;
