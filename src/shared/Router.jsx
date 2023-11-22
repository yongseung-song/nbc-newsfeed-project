import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import MyPage from "../pages/MyPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import GlobalColors from "../styles/GlobalColors";
import GlobalFonts from "../styles/GlobalFonts";

function Router() {
  return (
    <>
      <GlobalFonts />
      <GlobalColors />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="mypage/:memberId" element={<MyPage />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
