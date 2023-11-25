import React from "react";
import styled from "styled-components";
import InputBox from "../inputBox/InputBox";
import Posts from "../posts/Posts";

function Main() {
	return (
		<MainWrapper>
			<InputBox />
			<Posts />
		</MainWrapper>
	);
}

export default Main;

const MainWrapper = styled.main`
	max-width: 800px;
	width: 60%;
	/* border: 1px solid #000; */
`;
