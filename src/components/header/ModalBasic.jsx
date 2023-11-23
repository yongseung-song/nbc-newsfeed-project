import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const BoxStyle = styled.div`
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
`;

const ButtonStyle = styled.button`
	position: absolute;
	right: 10px;
	top: 10px;
`;

const Wrapper = styled.div`
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

const EmailLogin = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 27px;
`;

function ModalBasic({ setModalOpen }) {
	const closeModal = () => {
		setModalOpen(false);
	};

	const modalRef = useRef(null);

	// 모달 창 클릭시 뒷 내용 스크롤 고정
	useEffect(() => {
		document.body.style.cssText = `
			position: fixed; 
			top: -${window.scrollY}px;
			overflow-y: scroll;
			width: 100%;`;
		return () => {
			const scrollY = document.body.style.top;
			document.body.style.cssText = "";
			window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
		};
	}, []);

	useEffect(() => {
		const handler = (event) => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				setModalOpen(false);
			}
		};

		document.addEventListener("mousedown", handler);
		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});

	return (
		<>
			<Wrapper>
				<BoxStyle ref={modalRef}>
					<ButtonStyle onClick={closeModal}>X</ButtonStyle>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							marginTop: "40px",
							fontWeight: "700",
						}}
					>
						<p style={{ fontSize: "60px" }}>console.lo9</p>
						<EmailLogin>
							<p>이메일로 로그인</p>
							<input type="text" placeholder="이메일을 입력하세요"></input>
							<input
								type="password"
								placeholder="비밀번호를 입력하세요"
							></input>
							<button>로그인</button>
						</EmailLogin>
					</div>
				</BoxStyle>
			</Wrapper>
		</>
	);
}

export default ModalBasic;
