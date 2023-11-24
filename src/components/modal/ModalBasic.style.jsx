import styled from "styled-components";
import logoImage from "../../assets/console.lo9.png";
import xIcon from "../../assets/x_icon.png";

export const BoxStyle = styled.div`
	/* 모달창 크기 */
	width: 866px;
	height: 659.182px;
	flex-shrink: 0;

	/* 최상단 위치 */
	z-index: 999;

	/* 중앙 배치 */
	/* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
	/* translate는 본인의 크기 기준으로 작동한다. */
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	/* 모달창 디자인 */
	border-radius: 33.308px;
	background: #fff;
	box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
`;

export const ButtonStyle = styled.button`
	position: absolute;
	right: 25px;
	top: 25px;
	height: 24px;
	width: 24px;
	border: none;
	background: none;
	background-image: url(${xIcon});
	background-size: 100%;
	background-repeat: no-repeat;
	cursor: pointer;
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.04);
	backdrop-filter: blur(5.9px);
`;

export const EmailLogin = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 27px;
`;

export const BgImage = styled.p`
	background-image: url(${logoImage});
	background-size: 100%;
	width: 312px;
	height: 73px;
	background-repeat: no-repeat;
	margin-top: 20px;
`;
