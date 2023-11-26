import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/GlobalColors";

function Footer() {
	return (
		<StFooter>
			<StIndexWrapper>
				<p>Copyright 2023. console.lo9 All rights reserved.</p>
			</StIndexWrapper>
		</StFooter>
	);
}

export default Footer;

const StFooter = styled.footer`
	width: 100%;
	height: 100px;
	background-color: ${colors.backgroundColor};
	margin-top: 60px;
`;

const StIndexWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 50%;
	margin: auto;
	color: ${colors.indexFontColor};
	p {
		margin-top: 45px;
	}
`;
