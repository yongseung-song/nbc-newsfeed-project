import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../firebase";

function SignIn() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPasssword, setLoginPassword] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { setShowModal } = useContext(ModalContext);
  const [user, setUser] = useState("");

  console.log("로그인 상태", isLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        console.log(user.uid);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        console.log("로그아웃");
      }
    });
  }, []);

  const clickEmailChangehandler = (event) => {
    const emailInput = event.currentTarget.value;
    setLoginEmail(emailInput);
  };

  const clickPasswordChangehandler = (event) => {
    const passwordInput = event.currentTarget.value;
    setLoginPassword(passwordInput);
  };

  const clickLoginHandler = async (event) => {
    event.preventDefault();

    try {
      const userLogin = await signInWithEmailAndPassword(
        authService,
        loginEmail,
        loginPasssword
      );
      setUser(userLogin.user);
      console.log(userLogin.user);
      alert("환영합니다");
      setShowModal(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();

    return signInWithPopup(authService, googleProvider);
  };

  const signInWithGithub = () => {
    const githubProvider = new GithubAuthProvider();

    return signInWithPopup(authService, githubProvider);
  };

  const socialGoogleLoginhandler = async (event) => {
    event.preventDefault();
    await signInWithGoogle()
      .then((res) => {
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential.accessToken;
        const userName = res.user.displayName;

        // local storage에 token, username 저장해주기
        console.log(token);
        console.log(userName);

        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const clickLogoutBtnHandler = () => {
    authService.signOut();
    navigate("/");
  };

  const socialGithubLoginhandler = async (event) => {
    event.preventDefault();
    await signInWithGithub()
      .then((res) => {
        const credential = GithubAuthProvider.credentialFromResult(res);
        const token = credential.accessToken; // 로그인된 값
        const userName = res.user.displayName; // 유저이름

        // local storage에 token, username 저장해주기
        console.log(token);
        console.log(userName);

        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>로그인</h2>
      <form method="post">
        이메일:{" "}
        <input
          type="email"
          value={loginEmail}
          onChange={clickEmailChangehandler}
        />
        <br />
        비밀번호:{" "}
        <input
          type="password"
          value={loginPasssword}
          onChange={clickPasswordChangehandler}
        />
        <br />
        <button onClick={clickLoginHandler}>로그인</button>
        <button onClick={socialGoogleLoginhandler}>구글로그인</button>
        <button onClick={socialGithubLoginhandler}>깃허브로그인</button>
        <button onClick={clickLogoutBtnHandler}>로그아웃</button>
      </form>
    </div>
  );
}

export default SignIn;
