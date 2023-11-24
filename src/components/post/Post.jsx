import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "../../context/ModalContext";
import * as St from "./Post.style";
import Button from "../../shared/button/Button";
import Tag from "../tag/Tag";

function Post({ id, creator, title, content, date, tag }) {
  const { showModal, setShowModal } = useContext(ModalContext);
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
        <St.TagContainer>
          {tag &&
            Object.values(tag).map((item, idx) => {
              return <Tag key={idx} item={item} />;
            })}
        </St.TagContainer>
      </St.PostWrapper>
    </>
  );
}

export default Post;
