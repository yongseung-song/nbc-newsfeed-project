import dayjs from "dayjs";
import React from "react";
import { useNavigate } from "react-router-dom";
import ModalBasic from "../modal/ModalBasic";
import Tag from "../tag/Tag";

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
        {tag &&
          Object.values(tag).map((item, idx) => {
            return <Tag key={idx} item={item} />;
          })}
        <p>
          {editDate
            ? `수정된 시간: ${dayjs(editDate).format("YYYY년 M월 D일 hh:mm")}`
            : dayjs(createDate).format("YYYY년 M월 D일 hh:mm")}
        </p>
        <p>{title}</p>
        <p>{content}</p>
      </div>
    </ModalBasic>
  );
}

export default PostModal;
