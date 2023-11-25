import dayjs from "dayjs";
import React from "react";
import ModalBasic from "../modal/ModalBasic";

function PostModal({ id, creator, title, content, date, tag }) {
  return (
    <ModalBasic>
      <div>
        <h3></h3>
        <p></p>
        <p>{dayjs().format("YYYY년 M월 D일 hh:mm")}</p>
      </div>
      <button></button>
    </ModalBasic>
  );
}

export default PostModal;
