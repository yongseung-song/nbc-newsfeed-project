import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/GlobalColors";

function Tag({ item }) {
	// console.log(item);
	return <TagWrapper>#{item}</TagWrapper>;
}

export default Tag;

const TagWrapper = styled.li`
	border-radius: 4px;
	background-color: #fff;
	color: ${colors.smallTitleColor};
	font-weight: 700;
	font-size: 14px;
	border-radius: 99px;
	padding: 5px 10px;
`;
