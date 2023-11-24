import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../firebase";
import { ModalContext } from "../context/ModalContext";
import { AuthContext } from "../context/AuthContext";
import * as St from "../pages/SignIn.style";
import Button from "../shared/button/Button";

function SignIn({ hasAccount, setHasAccount }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPasssword, setLoginPassword] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { setShowModal } = useContext(ModalContext);
  const [user, setUser] = useState("");

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
      console.log(userLogin.user);
      alert("환영합니다");
      setShowModal(false);
      navigate("/");
      setUser(userLogin.user);
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

  const clickSignUpHandler = () => {
    setHasAccount(!hasAccount);
  };

  return (
    <St.Wrap>
      <St.EmailForm>이메일로 로그인</St.EmailForm>
      <St.EmailForm method="post">
        <St.IndexBox
          type="email"
          value={loginEmail}
          onChange={clickEmailChangehandler}
          placeholder="이메일을 입력해주세요"
        />
        ​
        <St.IndexBox
          type="password"
          value={loginPasssword}
          onChange={clickPasswordChangehandler}
          placeholder="비밀번호를 입력해주세요"
        />
        <St.LoginButtonBox>
          <St.LoginButton onClick={clickLoginHandler}>로그인</St.LoginButton>
        </St.LoginButtonBox>
      </St.EmailForm>
      <St.SocialForm method="post">
        <St.SocialForm>소셜계정으로 로그인</St.SocialForm>
        <St.SocialLoginBox>
          <St.GoogleLogin onClick={socialGoogleLoginhandler}></St.GoogleLogin>
          <St.GitHubLogin onClick={socialGithubLoginhandler}></St.GitHubLogin>
        </St.SocialLoginBox>
        {/* <button onClick={clickLogoutBtnHandler}>로그아웃</button> */}
      </St.SocialForm>
      <p>계정이 따로 없으신가요?</p>
      <Button clickBtnHandler={clickSignUpHandler}>회원가입하러가기</Button>
    </St.Wrap>
  );
}

export default SignIn;
