import dayjs from "dayjs";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { db } from "../firebase";
import { colors } from "../styles/GlobalColors";

function Update() {
	const [titleInput, setTitleinput] = useState("");
	const [contentTextarea, setContentTextarea] = useState("");
	const [currentPost, setCurrentPost] = useState({});
	const params = useParams();
	const inputRef = useRef();
	const textareaRef = useRef();
	const postUpdateRef = collection(db, "posts");

	const navigator = useNavigate();

	useEffect(() => {
		const getDocPost = async () => {
			const updatePost = doc(db, "posts", params.id);
			const snapshotPost = await getDoc(updatePost);
			const postData = snapshotPost.data();

			setCurrentPost(postData);

			return postData;
		};

		getDocPost();

		setTitleinput(currentPost.title);
		setContentTextarea(currentPost.content);
	}, []);

	const clickTitleChangeHandler = (event) => {
		const inputTitle = event.currentTarget.value;
		setTitleinput(inputTitle);
	};

	const clickContentChangeHandler = (event) => {
		const textareaContent = event.currentTarget.value;
		setContentTextarea(textareaContent);
	};

	const clickPostUpdateBtn = async (event) => {
		event.preventDefault();
		console.log(contentTextarea);
		if (currentPost.content === contentTextarea) {
			alert("수정된게 없어 돌아가 다시 작성해");
			return false;
		}

		if (window.confirm("진짜로 정말로 수정하시겠습니다?")) {
			await updateDoc(doc(postUpdateRef, params.id), {
				title: titleInput,
				content: contentTextarea,
				date: dayjs().toJSON(),
				edit: "수정됨",
			});
			alert("수정되었습니다!");

			navigator("/mypage");
		}
		return;
	};

	const clickGoToList = () => {
		navigator("/mypage");
	};

	return (
		<StUpdateWrapper>
			<StSectionTitle>글 수정하기 </StSectionTitle>
			<StIndexWrapper>
				<StCreatorDayWrapper>
					<p>작성자: {currentPost.creator}</p>
					<p>작성시간: {currentPost.date}</p>
				</StCreatorDayWrapper>
				<StInputTItle>제목:</StInputTItle>
				<StInputContent
					ref={inputRef}
					type="text"
					value={titleInput}
					onChange={clickTitleChangeHandler}
				/>
				<br />
				<StInputTItle>내용: </StInputTItle>
				<StTextArea
					ref={textareaRef}
					value={contentTextarea}
					onChange={clickContentChangeHandler}
				/>
				<StBtnContainer>
					<button type="submit" onClick={clickPostUpdateBtn}>
						수정하기
					</button>
					<button>취소</button>
					<button onClick={clickGoToList}>목록으로</button>
				</StBtnContainer>
			</StIndexWrapper>
		</StUpdateWrapper>
	);
}

export default Update;

const StUpdateWrapper = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 700px;
	margin: auto;
	box-shadow: 0px 4px 30px 5px rgba(0, 0, 0, 0.05);
	padding: 20px;
	border-radius: 20px;
`;

const StSectionTitle = styled.h3`
	color: ${colors.mainColor};
	font-family: Pretendard;
	font-size: 28px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	margin-bottom: 20px;
	margin-top: 20px;
	text-align: center;
`;

const StIndexWrapper = styled.div`
	display: flex;
	flex-direction: column;
	/* background-color: ${colors.inputBoxColor}; */
	border-radius: 10px;
	padding: 20px;
	width: 100%;
	gap: 10px;
`;

const StCreatorDayWrapper = styled.p`
	color: ${colors.postColor};
	display: flex;
	gap: 30px;
	margin-bottom: 25px;
	font-size: 14px;
`;

const StInputTItle = styled.label`
	color: ${colors.smallTitleColor};
	font-weight: 700;
	font-size: 24px;
`;

const StInputContent = styled.input`
	background-color: ${colors.inputBoxColor};
	border-radius: 20px;
	border: none;
	padding: 20px;
`;

const StTextArea = styled.textarea`
	background-color: ${colors.inputBoxColor};
	border-radius: 20px;
	border: none;
	padding: 20px;
	height: 200px;
	resize: none;
`;

const StBtnContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 10px;
	margin-top: 20px;
	button {
		background-color: ${colors.mainColor};
		border: none;
		padding: 10px 20px;
		color: #fff;
		font-weight: 700;
		border-radius: 99px;
		font-size: 16px;
		cursor: pointer;
	}
`;
