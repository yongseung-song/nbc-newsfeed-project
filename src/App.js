import React, { useState } from "react";
import "./App.css";
import { Context } from "./context/Context";
import Router from "./shared/Router";

function App() {
  const [showModal, setShowModal] = useState();
  return (
    <Context.Provider value={{ showModal, setShowModal }}>
      <Router />
    </Context.Provider>
  );
}

export default App;
