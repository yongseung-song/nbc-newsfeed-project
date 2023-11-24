import dayjs from "dayjs";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { authService, db } from "../../firebase";
import * as St from "./HeaderAuthModalSignUp.style";

function SignUp() {
  const signupRef = collection(db, "users");

  const [accountEmail, setAccountEmail] = useState("");
  const [accountPassword, setAccountPassword] = useState("");
  const [accountNickname, setAccountNickname] = useState("");

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

  const account = async (accountEmail, accountPassword) => {
    try {
      const user = await createUserWithEmailAndPassword(
        authService,
        accountEmail,
        accountPassword
      );
      // updateProfile 부분 추가 => @용승
      updateProfile(user.user, {
        displayName: accountNickname,
        photoURL: "https://img.icons8.com/ios-glyphs/60/user--v1.png",
      }).then((res) => console.log(res));

      const newDocRef = doc(signupRef);

      try {
        await setDoc(newDocRef, {
          // firebase에 저장할 데이터 매치
          id: newDocRef.id,
          uid: user.uid,
          userEmail: accountEmail,
          creator: accountNickname,
          userCreateAt: TODAY,
        });
      } catch (error) {
        console.error(error.code, error.message);
      }
    } catch (error) {
      console.log(error.code, error.message);
    }
  };

  // 회원가입 등록 버튼
  const accountBtnClickHandler = (event) => {
    event.preventDefault();
    console.log("test");
    account(accountEmail, accountPassword);
    alert("회원가입을 축하드립니다!");

    setAccountEmail("");
    setAccountPassword("");
    setAccountNickname("");
  };

  return (
    <St.SignUpBox>
      <h1>회원가입</h1>
      <from method="post">
        <St.SignUpSection>
          <p>이메일: </p>
          <input
            type="email"
            value={accountEmail}
            onChange={emailChangeHandler}
          />
        </St.SignUpSection>

        <St.SignUpSection>
          <p>비밀번호: </p>
          <input
            type="password"
            value={accountPassword}
            onChange={passwordChangeHandler}
          />
        </St.SignUpSection>

        <St.SignUpSection>
          <p>닉네임: </p>
          <input
            type="nickName"
            value={accountNickname}
            onChange={nicknameChangeHandler}
          />
        </St.SignUpSection>

        <button onClick={accountBtnClickHandler}>등록</button>
      </from>
    </St.SignUpBox>
  );
}

export default SignUp;
