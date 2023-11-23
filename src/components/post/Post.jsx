import React, { useState } from "react";
import * as St from "./Post.style";
import Button from "../../shared/button/Button";

function Post() {
  const [] = useState("");
  const [] = useState("");

  const addClick = () => {
    alert("추가되었습니다!");
  };

  const delClick = () => {
    alert("삭제되었습니다!");
  };

  return (
    <St.PostWrapper>
      {/* <form>
        제목: <input type="text" onChange={}/>
        <br />
        내용: <input type="text" onChange={}/>
        <br />
      </form> */}
      {/* <Button clickBtnHandler={addClick}>등록</Button> */}
    </St.PostWrapper>
  );
}

export default Post;
