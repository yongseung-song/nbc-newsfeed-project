import React from "react";

function Button({ children, clickBtnHandler }) {
  return <button onClick={clickBtnHandler}>{children}</button>;
}

export default Button;
