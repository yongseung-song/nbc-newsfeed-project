import React from "react";
import { Link } from "react-router-dom";
import * as St from "./Header.style.jsx";

function Header() {
  return (
    <St.Header>
      <Link to={"/"}>home</Link>
      <form action="submit">
        <label htmlFor="search">검색</label>
        <input id="search" name="search" type="text" />
      </form>
      <St.BtnContainer>
        <button>darkmode</button>
        <button>login</button>
      </St.BtnContainer>
    </St.Header>
  );
}

export default Header;
