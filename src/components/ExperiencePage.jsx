import React from "react";
import style from "../stylings/Experience.module.css";
function ExperiencePage({ isDark }) {
  return (
    <div
      className={`${style.MainConatiner} ${
        isDark ? style.MainConatinerDark : style.MainConatinerLight
      }`}
      id="work"
    >
      <p className={style.pageHeading}>work</p>
    </div>
  );
}

export default ExperiencePage;
