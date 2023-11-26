import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const StLayoutContainer = styled.div`
  display: grid;
  max-width: 1200px;
  width: 60vw;
  padding: 0 32px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 60px 1fr 60px;
  grid-template-areas:
    "header header header"
    "home home home"
    "footer footer footer";
`;

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
