import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { Context } from "../../context/Context";
import * as St from "./Post.style";
import BoardWrite from "../boardwrite/BoardWrite";

function Post() {
  const { showModal, setShowModal } = useContext(Context);
  const postClickHandler = () => {
    setShowModal(true); // 이부분때문에 포스트 누르면 모달 뜸
  };

  return (
    <>
      <St.PostWrapper onClick={postClickHandler}>
        <St.PostHeaderWrapper>
          <img src="" alt="img" />
          <div>
            <h3>홍길동</h3>
            <h4>리액트 너무 어렵다</h4>
          </div>
          <div>
            <button>좋아요</button>
            <button>북마크</button>
          </div>
        </St.PostHeaderWrapper>
        <p>살려주세요..</p>
      </St.PostWrapper>
    </>
  );
}

export default Post;
