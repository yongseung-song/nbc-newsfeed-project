import React from "react";
import Posts from "../posts/Posts";
import Sidebar from "../sidebar/Sidebar";
import * as St from "./Main.style";

function Main() {
  return (
    <St.MainWrapper>
      <Sidebar />
      <Posts />
    </St.MainWrapper>
  );
}

export default Main;
