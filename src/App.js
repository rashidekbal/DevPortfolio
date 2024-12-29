import Header from "./components/Header";

import "./App.css";
import { useState } from "react";
import Me from "./components/Me";

function App() {
  const [isDark, changeIsDark] = useState(true);
  return (
    <div className={isDark ? "mainBodyDark" : "mainBodyLight"}>
      <Header isDark={isDark} changeIsDark={changeIsDark}></Header>
      <Me isDark={isDark}></Me>
    </div>
  );
}

export default App;
