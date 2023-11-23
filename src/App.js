import React, { useState } from "react";
import "./App.css";
import { Context } from "./context/Context";
import Router from "./shared/Router";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Context.Provider
      value={{ showModal, setShowModal, isLoggedIn, setIsLoggedIn }}
    >
      <Router />
    </Context.Provider>
  );
}

export default App;
