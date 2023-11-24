import React, { useContext, useRef } from "react";
import * as St from "./InputBox.style";
// import { ModalContext } from "../../context/ModalContext";
function InputBox() {
  // const { postList, setPostList } = useContext(ModalContext);
  const textareaRef = useRef();

  return (
    <St.InputBox>
      <form action="">
        <label htmlFor="textarea">글을 입력하세요</label>
        <textarea ref={textareaRef} id="textarea" rows={5} />
        작성자:
        <input type="text" />
      </form>
      <Button />
      등록
      <button>취소</button>
    </St.InputBox>
  );
}

export default InputBox;
