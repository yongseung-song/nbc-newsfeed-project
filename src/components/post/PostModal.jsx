import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/GlobalColors";
import ModalBasic from "../modal/ModalBasic";

function PostModal({
	showPostModal,
	setShowPostModal,
	id,
	creator,
	title,
	content,
	createDate,
	tag,
	editDate,
}) {
	const navigate = useNavigate();

	return (
		<StAllContentWrapper>
			<ModalBasic
				showPostModal={showPostModal}
				setShowPostModal={setShowPostModal}
			>
				<StContentWrapper>
					<StCreatorDateWrapper>
						<StCreator>작성자: {creator}</StCreator>
						<StCreateDate>
							{editDate ? `수정된 시간: ${editDate}` : createDate}
						</StCreateDate>
					</StCreatorDateWrapper>
					<StTitle>{title}</StTitle>
					<StContent>{content}</StContent>
					<StBtn onClick={() => navigate(`/detail/${id}`)}>상세보기</StBtn>
				</StContentWrapper>
			</ModalBasic>
		</StAllContentWrapper>
	);
}

export default PostModal;

const StAllContentWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${colors.inputBoxColor};
	padding: 20px;
	border-radius: 20px;
	font-weight: 500;
	width: 100%;
	gap: 20px;
`;

const StCreatorDateWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	margin-bottom: 20px;
`;

const StCreator = styled.p`
	color: ${colors.postColor};
	font-weight: 500;
`;

const StCreateDate = styled.p`
	color: ${colors.postColor};
	font-weight: 500;
`;

const StTitle = styled.p`
	color: ${colors.postColor};
	font-weight: 700;
	font-size: 26px;
`;

const StContent = styled.p`
	color: ${colors.postColor};
	font-size: 16px;
	line-height: 24px;
	overflow-y: scroll;
	height: 280px;
`;

const StBtn = styled.button`
	margin: auto;
	background-color: ${colors.mainColor};
	border: none;
	padding: 10px 20px;
	color: #fff;
	font-weight: 700;
	border-radius: 99px;
	font-size: 16px;
	cursor: pointer;
	width: 30%;
`;
