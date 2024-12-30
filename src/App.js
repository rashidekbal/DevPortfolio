import Header from "./components/Header";

import "./App.css";
import { useState } from "react";
import Me from "./components/Me";
import About from "./components/About";
import TechnologyPage from "./components/TechnologyPage";

function App() {
  const [isDark, changeIsDark] = useState(true);
  return (
    <div className={isDark ? "mainBodyDark" : "mainBodyLight"}>
      <Header isDark={isDark} changeIsDark={changeIsDark}></Header>
      <Me isDark={isDark}></Me>
      <About isDark={isDark}></About>
      <TechnologyPage isDark={isDark}></TechnologyPage>
    </div>
  );
}

export default App;
