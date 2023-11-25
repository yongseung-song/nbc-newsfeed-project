import { collection, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";

function Update() {
  const postUpdateRef = collection(db, "posts");

  const [titleInput, setTitleinput] = useState("");

  const clickTitleChangeHandler = (event) => {
    const inputTitle = event.currentTarget.value;
    setTitleinput(inputTitle)
  }

  const clickPostUpdateBtn = async (event) => {
    event.preventDefault();

    await updateDoc(doc(postUpdateRef, currentUid), {
      editTitle: titleInput,
      editContent: ,
      editDate: datejs().format(),
      editTag: ,
    });
  };

  return (
    <form>
      <h3>글 수정하기</h3>
      <p>조회수</p>
      <p>작성자</p>
      <p>작성시간</p>
      제목: <input type="text" value={titleQuery} onChange={clickTitleChangeHandler}/>
      <br />
      내용: <textarea />
      <butto type="submit" onClick={clickPostUpdateBtn}>
        수정하기
      </butto>
      <butto>취소</butto>
      <butto>목록으로</butto>
    </form>
  );
}

export default Update;
