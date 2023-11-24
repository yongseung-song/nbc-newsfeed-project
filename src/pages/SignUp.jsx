import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { authService, db } from "../firebase";
import dayjs from "dayjs";
import * as St from "../pages/SignUp.style";

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
			<St.SectionTitle>회원가입</St.SectionTitle>
			<St.SignUpForm method="post">
				<St.SignUpSection>
					<p>이메일</p>
					<St.InputBox
						type="email"
						value={accountEmail}
						onChange={emailChangeHandler}
						placeholder="이메일을 입력해주세요"
					/>
				</St.SignUpSection>

				<St.SignUpSection>
					<p>비밀번호</p>
					<St.InputBox
						type="password"
						value={accountPassword}
						onChange={passwordChangeHandler}
						placeholder="비밀번호를 입력해주세요"
					/>
				</St.SignUpSection>

				<St.SignUpSection>
					<p>닉네임</p>
					<St.InputBox
						type="nickName"
						value={accountNickname}
						onChange={nicknameChangeHandler}
						placeholder="닉네임을 입력해주세요"
					/>
				</St.SignUpSection>

				<St.SignUpBtn onClick={accountBtnClickHandler}>등록</St.SignUpBtn>
			</St.SignUpForm>
		</St.SignUpBox>
	);
}

export default SignUp;
