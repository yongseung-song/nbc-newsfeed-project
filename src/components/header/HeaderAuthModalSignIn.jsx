import {
  GithubAuthProvider,
  GoogleAuthProvider,
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ModalContext } from "../../context/ModalContext";
import { authService } from "../../firebase";
import * as St from "./HeaderAuthModalSignIn.style";

function SignIn({ onClickGoToSignUp: handleClickGoToSignUp }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { setShowModal } = useContext(ModalContext);
  const [user, setUser] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        navigate("/");
        setShowModal(false);
      } else {
        setIsLoggedIn(false);
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

  const clickLoginHandler = (event) => {
    event.preventDefault();
    const auth = authService;
    setPersistence(auth, browserSessionPersistence)
      .then(() =>
        signInWithEmailAndPassword(authService, loginEmail, loginPassword)
      )
      .then(() => {
        console.log(auth.currentUser);
        alert(`${auth.currentUser.displayName}님 환영합니다!`);
        setShowModal(false);
        navigate("/");
        // setUser(.user);
      })
      .catch((error) => signInErrorHandler(error));
  };

  const signInErrorHandler = (error) => {
    if (error.code === "auth/invalid-login-credentials") {
      alert("아이디 또는 비밀번호를 확인해 주십시오.");
    } else if (error.code === "auto/missing-password") {
      alert("비밀번호를 입력해 주십시오");
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
    <St.Wrap>
      <St.SectionTItle>이메일로 로그인</St.SectionTItle>
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
          value={loginPassword}
          onChange={clickPasswordChangehandler}
          placeholder="비밀번호를 입력해주세요"
        />
        <St.LoginButtonBox>
          <St.LoginButton onClick={clickLoginHandler}>로그인</St.LoginButton>
        </St.LoginButtonBox>
      </St.EmailForm>
      <St.SocialForm method="post">
        <St.SectionTItle>소셜계정으로 로그인</St.SectionTItle>
        <St.SocialLoginBox>
          <St.GoogleLogin onClick={socialGoogleLoginhandler}></St.GoogleLogin>
          <St.GitHubLogin onClick={socialGithubLoginhandler}></St.GitHubLogin>
        </St.SocialLoginBox>
      </St.SocialForm>
      <St.SignUpBox>
        <St.SignUpTitle>계정이 따로 없으신가요?</St.SignUpTitle>
        <St.SignUpButton onClick={handleClickGoToSignUp}>
          회원가입하러가기
        </St.SignUpButton>
      </St.SignUpBox>
    </St.Wrap>
  );
}

export default SignIn;
