import React from "react";

function BoardWrite() {
  return (
    <>
      <form>
        제목:
        <input type="text" />
        내용:
        <textarea />
        작성자:
        <input type="text" />
        {/* <Button>등록</Button> */}
      </form>
    </>
  );
}

export default BoardWrite;
