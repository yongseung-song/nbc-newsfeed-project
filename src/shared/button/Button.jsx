import React from "react";

function Button({ children, ClickBtnHandler }) {
  return (
    <>
      <button onClick={ClickBtnHandler}>{children}</button>
    </>
  );
}
export default Button;
