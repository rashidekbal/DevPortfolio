import Header from "./components/Header";

import "./App.css";
import { useState } from "react";
import Me from "./components/Me";
import About from "./components/About";

function App() {
  const [isDark, changeIsDark] = useState(true);
  return (
    <div className={isDark ? "mainBodyDark" : "mainBodyLight"}>
      <Header isDark={isDark} changeIsDark={changeIsDark}></Header>
      <Me isDark={isDark}></Me>
      <About isDark={isDark}></About>
    </div>
  );
}

export default App;
