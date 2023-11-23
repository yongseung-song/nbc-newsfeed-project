import React, { useEffect, useRef } from "react";
import * as St from "../header/ModalBasic.style";
import SignUp from "../../pages/SignUp";
import { Link } from "react-router-dom";

function ModalBasic({ setModalOpen, children }) {
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
      <St.Wrapper>
        <St.BoxStyle ref={modalRef}>
          <St.ButtonStyle onClick={closeModal}></St.ButtonStyle>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "35px",
              fontWeight: "700",
              padding: "0 80px 80px 80px",
            }}
          >
            <St.BgImage></St.BgImage>
            {children}
          </div>
          <p>
            계정이 따로 없으신가요? <Link to="/signup">회원가입하러가기</Link>
          </p>
        </St.BoxStyle>
      </St.Wrapper>
    </>
  );
}

export default ModalBasic;
