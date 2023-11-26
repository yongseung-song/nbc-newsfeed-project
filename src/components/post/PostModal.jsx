import dayjs from "dayjs";
import React from "react";
import ModalBasic from "../modal/ModalBasic";

function PostModal({
  showPostModal,
  setShowPostModal,
  id,
  creator,
  title,
  content,
  date,
  tag,
}) {
  // console.log(id);
  return (
    <ModalBasic
      showPostModal={showPostModal}
      setShowPostModal={setShowPostModal}
    >
      <div>
        <h3>{id}</h3>
        <p>{content}</p>
        <p>{dayjs().format("YYYY년 M월 D일 hh:mm")}</p>
      </div>
      <button></button>
    </ModalBasic>
  );
}

export default PostModal;
