import React from "react";
import styled from "styled-components";
import idcard from "../assets/idcard.png";
import Profile from "../components/profile/Profile";
import { colors } from "../styles/GlobalColors";

function MyPage() {
	return (
		<WrapDiv>
			<IdCard>
				<IdCardName>강지향 공주</IdCardName>
				<IdCardClass>React_3기</IdCardClass>
			</IdCard>

			<Profile />
		</WrapDiv>
	);
}

export default MyPage;

const WrapDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const IdCard = styled.div`
	background-image: url(${idcard});
	width: 236px;
	height: 405px;
	background-size: cover; /* 이미지를 컨테이너에 맞게 조절합니다 */
	background-position: center;
`;

const IdCardName = styled.p`
	margin-top: 280px;
	text-align: center;
	color: ${colors.mainColor};
	font-size: 28px;
	font-weight: 900;
`;

const IdCardClass = styled.p`
	margin-top: 20px;
	text-align: center;
	color: ${colors.mainColor};
	font-size: 20px;
	font-weight: 700;
`;
