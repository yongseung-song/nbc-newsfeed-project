import styled from "styled-components";
import google from "../assets/google-logo-icon.png";
import github from "../assets/github-logo-icon.png";

export const Wrap = styled.div`
	width: 100%;
	margin-top: 20px;
`;

export const EmailForm = styled.form`
	color: #969696;
	font-family: Pretendard;
	font-size: 19px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	margin-bottom: 24px;
`;

export const SocialForm = styled.form`
	margin-top: 40px;
	color: #969696;
	font-family: Pretendard;
	font-size: 19px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	margin-bottom: 24px;
`;

export const TitleStyle = styled.h2`
	color: #969696;
	font-family: Pretendard;
	font-size: 19px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	margin-bottom: 24px;
`;

export const IndexBox = styled.input`
	width: 703px;
	height: 20px;
	flex-shrink: 0;
	border-radius: 16px;
	border: none;
	background: var(--secondColor, #f0f3ff);
	margin-bottom: 12px;
	padding: 17px 0 17px 25px;
	font-size: 18px;
	&::placeholder {
		/* padding: 17px 0 17px 25px; */
		font-size: 18px;
	}
`;

export const LoginButtonBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const LoginButton = styled.button`
	width: 180px;
	height: 52px;
	flex-shrink: 0;
	border-radius: 16px;
	border: none;
	background-color: #4a46ff;
	color: #fff;
	text-align: center;
	font-size: 17px;
	font-weight: 700;
	cursor: pointer;
`;

export const GoogleLogin = styled.button`
	background-image: url(${google});
	width: 85px;
	height: 85px;
	border: none;
	background-color: transparent;
	background-size: 100%;
	background-repeat: no-repeat;
	cursor: pointer;
`;

export const GitHubLogin = styled.button`
	background-image: url(${github});
	width: 85px;
	height: 85px;
	border: none;
	background-color: transparent;
	background-size: 100%;
	background-repeat: no-repeat;
	cursor: pointer;
`;

export const SocialLoginBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 60px;
`;
