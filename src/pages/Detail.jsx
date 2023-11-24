import React from "react";
import styled from "styled-components";

function Detail() {
  const EditDone = () => {
    if (!editingText) return alert("수정사항이 없습니다.");
  };

  const deleteBtnHandler = () => {
    const newLetters = letters.filter((letter) => letter.id !== id);
    setLetters(newLetters);
    const answer = window.confirm("정말로 삭제하시겠습니까?");
    if (!answer) return;
  };

  return (
    <>
      <BtnsWrapper>
        <Button ClickBtnHandler={EditDone}>수정</Button>

        <Button ClickBtnHandler={deleteBtnHandler}>삭제</Button>
      </BtnsWrapper>
    </>
  );
}
export default Detail;
