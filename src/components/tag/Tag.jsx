import React from "react";
import * as St from "./tag.style";

function Tag({ item }) {
  // console.log(item);
  return <St.TagWrapper>{item}</St.TagWrapper>;
}

export default Tag;
