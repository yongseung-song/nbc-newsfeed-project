import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalColors from "../styles/GlobalColors";
import GlobalFonts from "../styles/GlobalFonts";
import GlobalStyles from "../styles/GlobalStyles";

function Router() {
  return (
    <>
      <GlobalStyles />
      <GlobalFonts />
      <GlobalColors />
      <BrowserRouter>
        <Routes>
          <Route></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
