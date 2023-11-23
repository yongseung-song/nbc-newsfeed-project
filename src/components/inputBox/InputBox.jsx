import React, { useContext, useRef, useState } from "react";
import * as St from "./InputBox.style";
import { getAuth } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import dayjs from "dayjs";
import { db } from "../../firebase";
// import { ModalContext } from "../../context/ModalContext";
function InputBox() {
  // const { postList, setPostList } = useContext(ModalContext);
  const inputRef = useRef();
  const textareaRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;

  const newDocRef = doc(collection(db, "posts"));

  const postSubmitBtnClickHandler = async () => {
    setDoc(newDocRef, {
      title: inputValue,
      content: textAreaValue,
      date: dayjs().toJSON(),
      creator: user.displayName,
      tag: [],
    }).then((res) => console.log(res));
  };

  return (
    <St.InputBox>
      <form action="">
        <div>
          <label htmlFor="">제목</label>
          <input
            ref={inputRef}
            id="title"
            value={inputValue}
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="textarea">글을 입력하세요</label>
          <textarea
            placeholder="글의 내용을 입력해주세요"
            ref={textareaRef}
            value={textAreaValue}
            id="textarea"
            rows={5}
            onChange={(e) => setTextAreaValue(e.target.value)}
          />
        </div>
      </form>
      <button onClick={postSubmitBtnClickHandler}>등록</button>
      <button>취소</button>
    </St.InputBox>
  );
}

export default InputBox;
