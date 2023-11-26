import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authService } from "../../firebase";
import { colors } from "../../styles/GlobalColors";

function HeaderDropDown() {
	console.log("test");
	const navigator = useNavigate();

	const clickLogoutBtnHandler = () => {
		authService.signOut();
		navigator("/");
	};

	return (
		<div>
			<button onClick={() => navigator("mypage")}>마이페이지</button>
			<button onClick={clickLogoutBtnHandler}>로그아웃</button>
		</div>
	);
}

export default HeaderDropDown;

const StHeaderBtn = styled.button`
	background-color: ${colors.mainColor};
	color: #fff;
	border: none;
	padding: 8px 16px;
	border-radius: 99px;
	margin-left: 10px;
	font-weight: 700;
`;
