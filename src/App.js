import React, { useState } from "react";
import "./App.css";
import Router from "./shared/Router";
import AuthContextProvider from "./context/AuthContext";
import ModalContextProvider from "./context/ModalContext";

function App() {
  const [postList, setPostList] = useState([]);

  return (
    <AuthContextProvider>
      <ModalContextProvider>
        <Router />
      </ModalContextProvider>
    </AuthContextProvider>
  );
}

export default App;
