import React, { useRef } from "react";
import InputBox from "../inputBox/InputBox";
import Posts from "../posts/Posts";
import * as St from "./Main.style";

function Main() {
  return (
    <St.MainWrapper>
      <InputBox />
      <Posts />
    </St.MainWrapper>
  );
}

export default Main;
