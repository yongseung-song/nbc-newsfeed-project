import { getAuth } from "firebase/auth";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";
import { ModalContext } from "../../context/ModalContext";
import { authService } from "../../firebase";
import { colors } from "../../styles/GlobalColors";
import * as St from "./Header.style";
import HeaderAuthModal from "./HeaderAuthModal";

function HeaderAuthMenu() {
	const { isLoggedIn } = useContext(AuthContext);
	const name = getAuth()?.currentUser?.displayName;
	const { showModal, setShowModal } = useContext(ModalContext);
	const loginModalHandler = () => {
		setShowModal(true);
	};
	const userAvatarUrl = getAuth()?.currentUser?.photoURL;
	const navigate = useNavigate();

	const clickLogoutBtnHandler = () => {
		authService.signOut();
		navigate("/");
	};

	return (
		<>
			<div>
				<StHeaderBtn>darkmode</StHeaderBtn>
				{isLoggedIn ? (
					<StAuthMenu>
						<p>{name ?? "guest"}님</p>
						<St.DropDownBtn
							onClick={() => {
								navigate("mypage");
							}}
							src={userAvatarUrl}
						/>
						<StHeaderBtn onClick={clickLogoutBtnHandler}>로그아웃</StHeaderBtn>
					</StAuthMenu>
				) : (
					<StHeaderBtn onClick={loginModalHandler}>로그인</StHeaderBtn>
				)}
			</div>
			{showModal && <HeaderAuthModal />}
		</>
	);
}

export default HeaderAuthMenu;

const StAuthMenu = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const StHeaderBtn = styled.button`
	background-color: ${colors.mainColor};
	color: #fff;
	border: none;
	padding: 8px 16px;
	border-radius: 99px;
	margin-left: 10px;
	font-weight: 700;
`;
