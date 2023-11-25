import dayjs from "dayjs";
import { collection, doc, updateDoc } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";

function Update() {
  // const { id } = useParams();
  // console.log("id", id);
  const params = useParams();
  const inputRef = useRef();
  const textareaRef = useRef();
  const postUpdateRef = collection(db, "posts");

  const navigator = useNavigate();

  const [titleInput, setTitleinput] = useState("");
  const [contentTextarea, setContentTextarea] = useState("");

  const clickTitleChangeHandler = (event) => {
    const inputTitle = event.currentTarget.value;
    setTitleinput(inputTitle);
  };

  const clickContentChangeHandler = (event) => {
    const textareaContent = event.currentTarget.value;
    setContentTextarea(textareaContent);
  };

  const clickPostUpdateBtn = async (event) => {
    event.preventDefault();

    await updateDoc(doc(postUpdateRef, params.id), {
      editTitle: titleInput,
      editContent: contentTextarea,
      editDate: dayjs().toJSON(),
    });

    navigator("/mypage");
  };

  const clickGoToList = () => {
    navigator("/mypage");
  };

  return (
    <form>
      <h3>글 수정하기</h3>
      <p>조회수</p>
      <p>작성자</p>
      <p>작성시간</p>
      제목:{" "}
      <input
        ref={inputRef}
        type="text"
        value={titleInput}
        onChange={clickTitleChangeHandler}
      />
      <br />
      내용:{" "}
      <textarea
        ref={textareaRef}
        value={contentTextarea}
        onChange={clickContentChangeHandler}
      />
      <button type="submit" onClick={clickPostUpdateBtn}>
        수정하기
      </button>
      <button>취소</button>
      <button onClick={clickGoToList}>목록으로</button>
    </form>
  );
}

export default Update;
