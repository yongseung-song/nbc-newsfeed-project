import dayjs from "dayjs";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";

function Update() {
  const [titleInput, setTitleinput] = useState("");
  const [contentTextarea, setContentTextarea] = useState("");
  const [currentPost, setCurrentPost] = useState({});
  const params = useParams();
  const inputRef = useRef();
  const textareaRef = useRef();
  const postUpdateRef = collection(db, "posts");

  const navigator = useNavigate();

  useEffect(() => {
    const getDocPost = async () => {
      const updatePost = doc(db, "posts", params.id);
      const snapshotPost = await getDoc(updatePost);
      const postData = snapshotPost.data();

      setCurrentPost(postData);

      return postData;
    };

    getDocPost();

    setTitleinput(currentPost.title);
    setContentTextarea(currentPost.content);
  }, []);

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
    console.log(contentTextarea);
    if (currentPost.content === contentTextarea) {
      alert("수정된게 없어 돌아가 다시 작성해");
      return false;
    }

    if (window.confirm("진짜로 정말로 수정하시겠습니다?")) {
      await updateDoc(doc(postUpdateRef, params.id), {
        title: titleInput,
        content: contentTextarea,
        date: dayjs().toJSON(),
        edit: "수정됨",
      });
      alert("수정되었습니다!");

      navigator("/mypage");
    }
    return;
  };

  const clickGoToList = () => {
    navigator("/mypage");
  };

  return (
    <form>
      <h3>글 수정하기 </h3>
      <p>작성자 {currentPost.creator}</p>
      <p>작성시간 {currentPost.date}</p>
      제목:
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
