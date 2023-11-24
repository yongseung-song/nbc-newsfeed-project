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

  const postSubmitBtnClickHandler = async (e) => {
    if (textAreaValue && inputValue) {
      setDoc(newDocRef, {
        title: inputValue,
        content: textAreaValue,
        date: dayjs().toJSON(),
        creator: user.displayName,
        creatorUid: auth.currentUser.uid,
        id: newDocRef.id,
        tag: [],
      })
        .then(() => {
          setInputValue("");
          setTextAreaValue("");
        })
        .catch((error) => console.log(error));
    } else {
      alert("닉네임과 내용을 입력해주세요!");
    }
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
            required
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="textarea">글을 입력하세요</label>
          <textarea
            placeholder="글의 내용을 1500자 이내로 입력해주세요"
            ref={textareaRef}
            value={textAreaValue}
            id="textarea"
            required
            rows={5}
            maxLength={1500}
            onChange={(e) => setTextAreaValue(e.target.value)}
          />
        </div>
      </form>
      <button>취소</button>
    </St.InputBox>
  );
}

export default InputBox;
