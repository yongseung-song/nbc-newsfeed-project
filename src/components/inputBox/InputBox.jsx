import dayjs from "dayjs";
import { getAuth } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { PostContext } from "../../context/PostContext";
import { db } from "../../firebase";
// import { ModalContext } from "../../context/ModalContext";
function InputBox() {
  const { postList, setPostList } = useContext(PostContext);
  const inputRef = useRef();
  const textareaRef = useRef();
  const inputTagRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [inputTagValue, setInputTagValue] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;

  const newDocRef = doc(collection(db, "posts"));

  const parseTags = () => {
    return inputTagValue.trim().toLowerCase().split(",");
  };

  const postSubmitBtnClickHandler = async (e) => {
    // const tags = parseTags();
    const newPost = {
      title: inputValue,
      content: textAreaValue,
      date: dayjs().toJSON(),
      creator: user.displayName,
      creatorUid: auth.currentUser.uid,
      id: newDocRef.id,
      tag: parseTags(),
    };
    if (textAreaValue && inputValue) {
      setDoc(newDocRef, newPost)
        .then(() => {
          setPostList((prevList) => ({
            ...prevList,
            [newPost.id]: { ...newPost, id: newPost.id },
          }));
        })
        .then(() => {
          setInputValue("");
          setTextAreaValue("");
          setInputTagValue("");
        })
        .catch((error) => console.log(error));
    } else {
      alert("닉네임과 내용을 입력해주세요!");
    }
  };

  return (
    <StInputBox>
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
        <div>
          <label htmlFor="tags">태그를 입력해주세요.</label>
          <input
            placeholder="태그는 쉼표(,) 로 구분해주세요"
            ref={inputTagRef}
            value={inputTagValue}
            id="tags"
            type="text"
            onChange={(e) => setInputTagValue(e.target.value)}
          />
        </div>
      </form>
      <button type="submit" onClick={postSubmitBtnClickHandler}>
        등록
      </button>
      <button>취소</button>
    </StInputBox>
  );
}

export default InputBox;

export const StInputBox = styled.div`
  width: 100%;
  height: 160px; // 조건부 스타일링 필요
  position: sticky;
  top: 84px;
  margin-bottom: 16px;
  background-color: #fff;
  border: 1px solid #000;
  textarea {
    width: 80%;
    resize: none;
  }
  div {
  }
`;
