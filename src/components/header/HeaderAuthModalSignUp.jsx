import dayjs from "dayjs";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService, db } from "../../firebase";
import * as St from "./HeaderAuthModalSignUp.style";

function SignUp() {
  const [accountEmail, setAccountEmail] = useState("");
  const [accountPassword, setAccountPassword] = useState("");
  const [accountNickname, setAccountNickname] = useState("");
  const signupRef = collection(db, "users");
  const navigate = useNavigate();

  const TODAY = dayjs().format("YY-MM-DD HH:mm:ss");

  const emailChangeHandler = (event) => {
    const email = event.currentTarget.value;
    setAccountEmail(email);
  };

  const passwordChangeHandler = (event) => {
    const password = event.currentTarget.value;
    setAccountPassword(password);
  };

  const nicknameChangeHandler = (event) => {
    const nickname = event.currentTarget.value;
    setAccountNickname(nickname);
  };

  const createAccount = (accountEmail, accountPassword) => {
    const auth = getAuth();
    const newDocRef = doc(signupRef);
    // .then((res) => console.log(res));
    createUserWithEmailAndPassword(authService, accountEmail, accountPassword)
      .then(() =>
        updateProfile(auth.currentUser, {
          displayName: accountNickname,
          photoURL: "https://img.icons8.com/ios-glyphs/60/user--v1.png",
        })
      )
      .then(() =>
        setDoc(doc(signupRef), {
          // firebase에 저장할 데이터 매치
          id: newDocRef.id,
          uid: auth.currentUser.uid,
          userEmail: accountEmail,
          nickname: accountNickname,
          photoURL: auth.currentUser.photoURL,
          userCreateAt: TODAY,
        })
      )
      .then(() => {
        alert(`${accountNickname}님 회원 가입을 축하드립니다!`);
        setAccountEmail("");
        setAccountPassword("");
        setAccountNickname("");
      })
      .then(() => navigate("/"))
      .catch((error) => signUpErrorHandler(error));
  };

  const signUpErrorHandler = (error) => {
    if (error.code === "auth/email-already-in-use") {
      alert("입력하신 이메일 주소로 가입된 아이디가 이미 존재합니다.");
    } else if (error.code === "auth/invalid-email") {
      alert("유효하지 않은 이메일입니다.");
    } else if (error.code === "auth/weak-password") {
      alert("비밀번호는 6글자 이상이어야 합니다.");
    }
  };

  // 회원가입 등록 버튼
  const accountBtnClickHandler = (event) => {
    event.preventDefault();
    createAccount(accountEmail, accountPassword);
  };

  return (
    <St.SignUpBox>
      <St.SectionTitle>회원가입</St.SectionTitle>
      <St.SignUpForm method="post">
        <St.SignUpSection>
          <p>이메일: </p>
          <St.InputBox
            type="email"
            value={accountEmail}
            onChange={emailChangeHandler}
          />
        </St.SignUpSection>

        <St.SignUpSection>
          <p>비밀번호: </p>
          <St.InputBox
            type="password"
            value={accountPassword}
            onChange={passwordChangeHandler}
          />
        </St.SignUpSection>

        <St.SignUpSection>
          <p>닉네임: </p>
          <St.InputBox
            type="nickName"
            value={accountNickname}
            onChange={nicknameChangeHandler}
          />
        </St.SignUpSection>

        <St.SignUpBtn onClick={accountBtnClickHandler}>등록</St.SignUpBtn>
      </St.SignUpForm>
    </St.SignUpBox>
  );
}

export default SignUp;
