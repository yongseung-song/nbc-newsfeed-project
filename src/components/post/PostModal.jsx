import React from "react";
import { useNavigate } from "react-router-dom";
import ModalBasic from "../modal/ModalBasic";

function PostModal({
  showPostModal,
  setShowPostModal,
  id,
  creator,
  title,
  content,
  createDate,
  tag,
  editDate,
}) {
  const navigate = useNavigate();

  return (
    <ModalBasic
      showPostModal={showPostModal}
      setShowPostModal={setShowPostModal}
    >
      <div>
        <button onClick={() => navigate(`/detail/${id}`)}>상세보기</button>
        <p>{creator}</p>
        <p>{editDate ? `수정된 시간: ${editDate}` : createDate}</p>
        <p>{title}</p>
        <p>{content}</p>
      </div>
    </ModalBasic>
  );
}

export default PostModal;
