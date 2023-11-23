import React, { useRef } from "react";
import InputBox from "../inputBox/InputBox";
import Posts from "../posts/Posts";
import * as St from "./Main.style";

function Main() {
  const mainRef = useRef();

  return (
    <St.MainWrapper ref={mainRef}>
      <InputBox />
      <Posts ref={mainRef} />
    </St.MainWrapper>
  );
}

export default Main;
