import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import MyPage from "../pages/MyPage";
import Update from "../pages/Update";
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
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="mypage" element={<MyPage />} />
            <Route path="mypage/update/:id" element={<Update />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
