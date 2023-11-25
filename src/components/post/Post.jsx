import { getAuth } from "firebase/auth";
import React, { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import Tag from "../tag/Tag";
import * as St from "./Post.style";
import PostModal from "./PostModal";

function Post({ id, creator, creatoruid, title, content, date, tag }) {
  const { showPostModal, setShowPostModal } = useContext(ModalContext);
  const postClickHandler = () => {
    setShowPostModal(true); // 이부분때문에 포스트 누르면 모달 뜸
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
        {creatoruid === getAuth()?.currentUser?.uid ? (
          <button>수정/삭제</button>
        ) : (
          ""
        )}
      </St.PostWrapper>
      {showPostModal && (
        <PostModal
          id={id}
          creator={creator}
          title={title}
          content={content}
          date={date}
          tag={[]}
        />
      )}
    </>
  );
}

export default Post;
