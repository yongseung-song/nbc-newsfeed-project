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

  const navigate = useNavigate();

  useEffect(() => {
    const getDocPost = async () => {
      const updatePost = doc(db, "posts", params.id);
      const snapshotPost = await getDoc(updatePost);
      const postData = snapshotPost.data();

      setCurrentPost({ ...postData });
      console.log(postData);
      return postData;
    };

    getDocPost();
  }, []);

  const titleChangeHandler = (event) => {
    const inputTitle = event.currentTarget.value;
    setTitleinput(inputTitle);
  };

  const contentChangeHandler = (event) => {
    const textareaContent = event.currentTarget.value;
    setContentTextarea(textareaContent);
  };

  const clickPostUpdateBtn = async (event) => {
    event.preventDefault();
    console.log(contentTextarea);
    if (currentPost.content === textareaRef.current.value) {
      alert("수정사항이 없습니다.");
      return false;
    }

    if (window.confirm("글을 수정하시겠습니까?")) {
      await updateDoc(doc(postUpdateRef, params.id), {
        title: inputRef.current.value,
        content: textareaRef.current.value,
        date: dayjs().toJSON(),
        edit: "수정됨",
      });
      alert("수정되었습니다!");

      navigate(`/detail/${params.id}`);
      // okok detail 페이지로 리디렉션
    }
    return;
  };

  const clickGoToList = () => {
    navigate("/mypage");
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
        defaultValue={currentPost.title}
        onChange={titleChangeHandler}
      />
      <br />
      내용:{" "}
      <textarea
        ref={textareaRef}
        defaultValue={currentPost.content}
        onChange={contentChangeHandler}
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
