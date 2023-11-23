import React, { useState, useContext } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "../../context/ModalContext";
import * as St from "./Post.style";
import Button from "../../shared/button/Button";

<<<<<<< HEAD
function Post({ date, title, creator, tag, id, content }) {
  const { showModal, setShowModal } = useContext(Context);
=======
function Post() {
  const { showModal, setShowModal } = useContext(ModalContext);
>>>>>>> 28ab97c20fd52a07f46c1034cbf9e26f3418fc50
  const postClickHandler = () => {
    setShowModal(true); // 이부분때문에 포스트 누르면 모달 뜸
  };

  return (
    <>
      <St.PostWrapper id={id} onClick={postClickHandler}>
        <St.PostHeaderWrapper>
          <img src="" alt="img" />
          <div>
            <h3>{creator}</h3>
            <h4>{title}</h4>
          </div>
          <div>
            <button>좋아요</button>
            <button>북마크</button>
          </div>
        </St.PostHeaderWrapper>
        <p>{content}</p>
        <p>{date}</p>
        {/* {tag.map((items) => {
          return <span>tag</span>;
        })} */}
        <span>엥</span>
      </St.PostWrapper>
    </>
  );
}

export default Post;
