import dayjs from "dayjs";
import React from "react";
import ModalBasic from "../modal/ModalBasic";

function PostModal() {
  return (
    <ModalBasic>
      <div>
        <h3>모달 테스트</h3>
        <p>우악 이게되나?</p>
        <p>{dayjs().format("YYYY년 M월 D일 hh:mm")}</p>
      </div>
    </ModalBasic>
  );
}

export default PostModal;
