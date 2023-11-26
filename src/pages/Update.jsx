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
	const navigate = useNavigate();
	useEffect(() => {
		const getDocPost = async () => {
			const updatePost = doc(db, "posts", params.id);
			const snapshotPost = await getDoc(updatePost);
			const postData = snapshotPost.data();
			setCurrentPost({ ...postData });
			console.log(postData);
			return postData;
		};
		getDocPost();
	}, []);
	const titleChangeHandler = (event) => {
		const inputTitle = event.currentTarget.value;
		setTitleinput(inputTitle);
	};
	const contentChangeHandler = (event) => {
		const textareaContent = event.currentTarget.value;
		setContentTextarea(textareaContent);
	};
	const clickUpdateBtnHandler = async (event) => {
		event.preventDefault();
		console.log(contentTextarea);
		if (currentPost.content === textareaRef.current.value) {
			alert("수정사항이 없습니다.");
			return false;
		}
		if (window.confirm("글을 수정하시겠습니까?")) {
			await updateDoc(doc(postUpdateRef, params.id), {
				title: inputRef.current.value,
				content: textareaRef.current.value,
				editDate: dayjs().toJSON(),
			});
			alert("수정되었습니다!");
			navigate(`/detail/${params.id}`);
			// okok detail 페이지로 리디렉션
		}
		return;
	};
	const clickUpdateCancelBtnHandler = () => {};
	const clickGoToList = () => {
		navigate("/mypage");
	};
	return (
		<StUpdateWrapper>
			<StSectionTitle>글 수정하기 </StSectionTitle>
			<StIndexWrapper>
				<StCreatorDayWrapper>
					<p>작성자: {currentPost.creator}</p>
					<p>
						{currentPost.editDate
							? `수정된 시간: ${dayjs(currentPost.editDate).format(
									"YYYY년 M월 D일 hh:mm"
							  )}`
							: `작성된 시간: dayjs(currentPost.createDate).format("YYYY년 M월 D일 hh:mm")`}
					</p>
				</StCreatorDayWrapper>
				<StInputTItle>제목:</StInputTItle>
				<StInputContent
					ref={inputRef}
					type="text"
					defaultValue={currentPost.title}
					onChange={titleChangeHandler}
				/>
				<br />
				<StInputTItle>내용: </StInputTItle>
				<StTextArea
					ref={textareaRef}
					defaultValue={currentPost.content}
					onChange={contentChangeHandler}
				/>
				<StBtnContainer>
					<button type="submit" onClick={clickUpdateBtnHandler}>
						수정하기
					</button>
					<button onClick={clickUpdateCancelBtnHandler}>취소</button>
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
