import { getAuth } from "firebase/auth";
import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../context/ModalContext";
import { colors } from "../../styles/GlobalColors";
import Tag from "../tag/Tag";
import PostModal from "./PostModal";

function Post({ id, creator, creatorUid, title, content, date, tag, edit }) {
	const { showPostModal, setShowPostModal } = useContext(ModalContext);
	const postClickHandler = () => {
		setShowPostModal(true); // 이부분때문에 포스트 누르면 모달 뜸
	};

	return (
		<>
			<StPostWrapper id={id} onClick={postClickHandler}>
				<StIndexWrap>
					<StPostHeaderWrapper>
						<StProfileCreator>
							<img src="" alt="img" />
							<h3>작성자: {creator}</h3>
							<StDayContent>{date}</StDayContent>
						</StProfileCreator>
						<StBtnContainer>
							<StFnBtn>👍🏻</StFnBtn>
							<StFnBtn>⭐️</StFnBtn>
							{creatorUid === getAuth()?.currentUser?.uid ? (
								<StReviseBtn>수정/삭제</StReviseBtn>
							) : (
								""
							)}
						</StBtnContainer>
					</StPostHeaderWrapper>
					<StPostTitle>{title}</StPostTitle>
					<StContent>{content}</StContent>

					<StTagContainer>
						{tag &&
							Object.values(tag).map((item, idx) => {
								return <Tag key={idx} item={item} />;
							})}
					</StTagContainer>
				</StIndexWrap>
			</StPostWrapper>
			{showPostModal && (
				<PostModal
					id={id}
					creator={creator}
					title={title}
					content={content}
					date={date}
					tag={[]}
				/>
			)}
		</>
	);
}

export default Post;

const StPostWrapper = styled.article`
	width: 630px;
	/* height: 140px; */
	box-shadow: 0px 4px 30px 5px rgba(0, 0, 0, 0.05);
	padding: 20px;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const StPostHeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
	/* div {
		margin-left: 32px;
	} */
`;
const StTagContainer = styled.ul`
	display: flex;
	gap: 8px;
`;

const StDayContent = styled.p`
	color: ${colors.indexFontColor};
	font-size: 12px;
	margin-left: 20px;
`;

const StBtnContainer = styled.div`
	display: flex;
	column-gap: 5px;
	align-items: flex-start;
`;

const StFnBtn = styled.button`
	border: none;
	border-radius: 999px;
	background-color: #fff;
	text-align: center;
	cursor: pointer;
	padding: 2px 10px;
`;

const StIndexWrap = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${colors.inputBoxColor};
	border-radius: 10px;
	padding: 10px;
`;

const StReviseBtn = styled.button`
	border: none;
	border-radius: 999px;
	background-color: #fff;
	text-align: center;
	cursor: pointer;
	padding: 2px 10px;
	color: ${colors.smallTitleColor};
`;

const StContent = styled.p`
	color: ${colors.postColor};
	margin: 0 25px 10px 25px;
`;

const StPostTitle = styled.h4`
	color: ${colors.postColor};
	font-weight: 700;
	font-size: 26px;
	/* margin-bottom: 10px; */
	margin: 0 25px 10px 25px;
`;

const StProfileCreator = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	h3 {
		color: ${colors.postColor};
		margin-left: 20px;
		font-weight: 500;
	}
`;
