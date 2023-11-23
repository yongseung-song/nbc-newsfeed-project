import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import logoImage from "../../assets/console.lo9.png";
import { Context } from "../../context/Context";
/* 








  인준님 스타일드 컴포넌트 작명법 하나도 안지키셨죠? ^^
  지향님 지도 부탁드립니다. 덧붙여 ModalBasic <- 이름도 한번 고민해주시구요
  ModalBasic.style.jsx 파일도 좀 만들어주세용~








 */
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

const BgImage = styled.p`
  background-image: url(${logoImage});
  background-size: 100%;
  width: 312px;
  height: 73px;
  background-repeat: no-repeat;
`;

function ModalBasic({ children }) {
  const modalRef = useRef(null);
  const { setShowModal } = useContext(Context);

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
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const closeModal = () => {
    setShowModal(false);
  };

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
            <BgImage />
            {children}
          </div>
        </BoxStyle>
      </Wrapper>
    </>
  );
}

export default ModalBasic;
