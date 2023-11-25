import React from "react";
import styled from "styled-components";
import Profile from "../components/profile/Profile";

function MyPage() {
	return (
		<StFormWrapper>
			{/* <StPostForm>
				<StPostContent>강지향 공주</StPostContent>
				<StPostContentClass>React_3기</StPostContentClass>
			</StPostForm> */}

			<Profile />
		</StFormWrapper>
	);
}

export default MyPage;

const StFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

// const StPostForm = styled.div`
// 	background-image: url(${idcard});
// 	width: 236px;
// 	height: 405px;
// 	background-size: cover; /* 이미지를 컨테이너에 맞게 조절합니다 */
// 	background-position: center;
// `;

// const StPostContent = styled.p`
// 	margin-top: 280px;
// 	text-align: center;
// 	color: ${colors.mainColor};
// 	font-size: 28px;
// 	font-weight: 900;
// `;

// const StPostContentClass = styled.p`
// 	margin-top: 20px;
// 	text-align: center;
// 	color: ${colors.mainColor};
// 	font-size: 20px;
// 	font-weight: 700;
// `;
