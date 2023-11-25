import React from "react";
import { Link } from "react-router-dom";
// import * as St from "./Header.style.jsx";
import styled from "styled-components";
import logoIcon from "../../assets/console.lo9.png";
import { colors } from "../../styles/GlobalColors.jsx";
import HeaderAuthMenu from "./HeaderAuthMenu.jsx";

function Header() {
	return (
		<HeaderBox>
			<HeaderBoxDiv>
				<LinkIcon to="/"></LinkIcon>
				<form action="submit">
					<label htmlFor="search"></label>
					<SearchBox id="search" name="search" type="text" />
				</form>

				<HeaderAuthMenu />
			</HeaderBoxDiv>
		</HeaderBox>
	);
}

export default Header;

const HeaderBox = styled.header`
	display: flex;
	position: sticky;
	top: 0;
	z-index: 2;
	height: 100px;
	justify-content: center;
	align-items: center;
	/* justify-content: space-between; */
	/* border: 1px solid red; */
	background: ${colors.backgroundColor};
	box-shadow: 0px 2px 12px 1px rgba(0, 0, 0, 0.05);
	margin-bottom: 40px;
`;

const LinkIcon = styled(Link)`
	background-image: url(${logoIcon});
	text-decoration: none;
	background-size: 100%, 100%;
	background-position: center;
	background-repeat: no-repeat;
	width: 249px;
	height: 58px;
`;

const HeaderBoxDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 866px;
	gap: 20px;
`;

const SearchBox = styled.input`
	width: 350px;
	height: 32px;
	flex-shrink: 0;
	border-radius: 66px;
	background: ${colors.inputBoxColor};
	border: none;
`;
