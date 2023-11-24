import React, { useContext, useEffect, useRef } from "react";
import * as St from "../header/ModalBasic.style";
import SignUp from "../../pages/SignUp";
import { Link } from "react-router-dom";
import Button from "../../shared/button/Button";
import { ModalContext } from "../../context/ModalContext";

function ModalBasic({ hasAccount, setHasAccount, children }) {
  const { setShowModal } = useContext(ModalContext);

  const closeModal = () => {
    setShowModal(false);
    setHasAccount(true);
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
        setShowModal(false);
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
        </St.BoxStyle>
      </St.Wrapper>
    </>
  );
}

export default ModalBasic;
