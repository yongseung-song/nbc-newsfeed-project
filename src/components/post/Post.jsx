import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { Context } from "../../context/Context";
import ModalContent from "../modalContent/ModalContent";
import * as St from "./Post.style";

function Post() {
  const { showModal, setShowModal } = useContext(Context);
  const postClickHandler = () => {
    setShowModal(true);
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

      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)}>
            {/* <Post /> */}
          </ModalContent>,
          document.body
        )}
    </>
  );
}

export default Post;
