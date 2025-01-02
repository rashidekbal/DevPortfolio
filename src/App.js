import Header from "./components/Header";

import "./App.css";
import { useState } from "react";
import Me from "./components/Me";
import About from "./components/About";
import TechnologyPage from "./components/TechnologyPage";
import ExperiencePage from "./components/ExperiencePage";

function App() {
  const [isDark, changeIsDark] = useState(true);
  return (
    <div className={isDark ? "mainBodyDark" : "mainBodyLight"}>
      <Header isDark={isDark} changeIsDark={changeIsDark}></Header>
      <Me isDark={isDark}></Me>
      <About isDark={isDark}></About>
      <TechnologyPage isDark={isDark}></TechnologyPage>
      <ExperiencePage isDark={isDark}></ExperiencePage>
    </div>
  );
}

export default App;
