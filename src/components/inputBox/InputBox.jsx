import dayjs from "dayjs";
import { getAuth } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { PostContext } from "../../context/PostContext";
import { db } from "../../firebase";
import { colors } from "../../styles/GlobalColors";
// import { ModalContext } from "../../context/ModalContext";
function InputBox() {
	const { postList, setPostList } = useContext(PostContext);
	const inputRef = useRef();
	const textareaRef = useRef();
	const [inputValue, setInputValue] = useState("");
	const [textAreaValue, setTextAreaValue] = useState("");
	const auth = getAuth();
	const user = auth.currentUser;

	const newDocRef = doc(collection(db, "posts"));

	const postSubmitBtnClickHandler = async (e) => {
		const newPost = {
			title: inputValue,
			content: textAreaValue,
			date: dayjs().toJSON(),
			creator: user.displayName,
			creatorUid: auth.currentUser.uid,
			id: newDocRef.id,
			tag: [],
		};
		if (textAreaValue && inputValue) {
			setDoc(newDocRef, newPost)
				.then(() => {
					setPostList((prevList) => ({
						...prevList,
						[newPost.id]: { ...newPost, id: newPost.id },
					}));
				})
				.then(() => {
					setInputValue("");
					setTextAreaValue("");
				})
				.catch((error) => console.log(error));
		} else {
			alert("닉네임과 내용을 입력해주세요!");
		}
	};

	return (
		<InputBoxDiv>
			<form action="">
				<WriteBoxDiv>
					<label htmlFor=""></label>
					<InputBoxStyle
						ref={inputRef}
						id="title"
						value={inputValue}
						type="text"
						required
						onChange={(e) => setInputValue(e.target.value)}
						placeholder="제목을 입력해주세요"
					/>
				</WriteBoxDiv>
				<WriteBoxDiv>
					<label htmlFor="textarea"></label>
					<TextAreaStyle
						placeholder="글의 내용을 1500자 이내로 입력해주세요"
						ref={textareaRef}
						value={textAreaValue}
						id="textarea"
						required
						rows={5}
						maxLength={1500}
						onChange={(e) => setTextAreaValue(e.target.value)}
					/>
				</WriteBoxDiv>
			</form>
			<BtnDiv>
				<ButtonStyle type="submit" onClick={postSubmitBtnClickHandler}>
					등록
				</ButtonStyle>
				<ButtonStyle>취소</ButtonStyle>
			</BtnDiv>
		</InputBoxDiv>
	);
}

export default InputBox;

const InputBoxDiv = styled.div`
	width: 630px;
	/* height: 160px; // 조건부 스타일링 필요 */
	position: sticky;
	padding: 30px;
	top: 84px;
	margin-bottom: 16px;
	border-radius: 30px;
	background: #fff;

	/* bigShadow */
	box-shadow: 0px 4px 30px 5px rgba(0, 0, 0, 0.05);
	textarea {
		/* width: 80%; */
		resize: none;
	}
	div {
	}
`;

const InputBoxStyle = styled.input`
	background-color: ${colors.inputBoxColor};
	border: none;
	padding: 10px 0 10px 25px;
	border-radius: 15px;
	width: 100%;
	&::placeholder {
		/* padding: 10px 0 10px 25px; */
		font-size: 12px;
		color: ${colors.indexFontColor};
	}
`;

const TextAreaStyle = styled.textarea`
	background-color: ${colors.inputBoxColor};
	border: none;
	padding: 10px 0 10px 25px;
	border-radius: 15px;
	width: 100%;
	&::placeholder {
		/* padding: 17px 0 17px 25px; */
		font-size: 12px;
		color: ${colors.indexFontColor};
	}
`;

const WriteBoxDiv = styled.div`
	margin-bottom: 20px;
	width: 100%;
`;

const BtnDiv = styled.div`
	display: flex;
	justify-content: right;
`;

const ButtonStyle = styled.button`
	background-color: ${colors.mainColor};
	border: none;
	color: #fff;
	padding: 10px 25px;
	margin-left: 10px;
	border-radius: 30px;
	font-weight: 700;
`;
