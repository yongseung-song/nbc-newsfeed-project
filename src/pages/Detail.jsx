import React from "react";

function Detail() {
  const deleteBtnHandler = () => {
    const answer = window.confirm("정말로 삭제하시겠습니까?");
    if (!answer) return;
  };
  const EditDone = () => {
    if (!editingText) return alert("수정사항이 없습니다.");
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
