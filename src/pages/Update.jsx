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
    const updateCheck = window.confirm("진짜로 정말로 수정하시겠습니다?");

    if (updateCheck) {
      await updateDoc(doc(postUpdateRef, params.id), {
        editTitle: titleInput,
        editContent: contentTextarea,
        editDate: dayjs().toJSON(),
      });

      alert("수정되었습니다!");

      navigator("/mypage");
    } else {
      return false;
    }
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
        defaultValue={
          currentPost.editTitle ? currentPost.editTitle : currentPost.title
        }
        onChange={clickTitleChangeHandler}
      />
      <br />
      내용:{" "}
      <textarea
        ref={textareaRef}
        defaultValue={
          currentPost.editContent
            ? currentPost.editContent
            : currentPost.content
        }
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
