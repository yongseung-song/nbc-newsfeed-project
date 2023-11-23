import React, { useState } from "react";
import "./App.css";
import Router from "./shared/Router";
import AuthContextProvider from "./context/AuthContext";
import ModalContextProvider from "./context/ModalContext";
import PostContextProvider from "./context/PostContext";

function App() {
  return (
    <AuthContextProvider>
      <ModalContextProvider>
        <PostContextProvider>
          <Router />
        </PostContextProvider>
      </ModalContextProvider>
    </AuthContextProvider>
  );
}

export default App;
