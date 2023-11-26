import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/GlobalColors";

function Sidebar() {
	return (
		<SideBarDiv>
			<ButtonDiv>
				<ButtonStyle>개발 팁 공유</ButtonStyle>
				<ButtonStyle>사이드 프로젝트 구인</ButtonStyle>
				<ButtonStyle>질문</ButtonStyle>
			</ButtonDiv>
		</SideBarDiv>
	);
}

export default Sidebar;

const SideBarDiv = styled.div`
	position: sticky;
	top: 110px;
	max-width: 200px;
	width: 200px;
	height: 600px;
	border: none;
	margin: 0;
	border-radius: 30px;
	background: #fff;

	/* bigShadow */
	box-shadow: 0px 4px 30px 5px rgba(0, 0, 0, 0.05);
`;

const ButtonStyle = styled.button`
	border-radius: 15px;
	background: ${colors.inputBoxColor};
	border: none;
	color: ${colors.mainColor};
	font-weight: 700;
	/* margin: 20px 20px 0px 20px; */
	height: 50px;
	cursor: pointer;
	transition: all 0.8s ease;
	&:hover {
		background-color: ${colors.mainColor};
		color: ${colors.inputBoxColor};
	}
`;

const ButtonDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	margin: 20px;
`;
