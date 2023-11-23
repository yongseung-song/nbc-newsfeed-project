import React from "react";
import Main from "../components/main/Main";
import { app } from "../firebase";

function Home() {
  console.log("app", app);

  return <Main />;
}

export default Home;
