import React from "react";
import { Link } from "react-router-dom";
import * as St from "./Header.style.jsx";
import HeaderAuthMenu from "./HeaderAuthMenu.jsx";

function Header() {
  return (
    <St.Header>
      <Link to="/">home</Link>
      <form action="submit">
        <label htmlFor="search">검색</label>
        <input id="search" name="search" type="text" />
      </form>

      <HeaderAuthMenu />
    </St.Header>
  );
}

export default Header;
