import React from "react";
import style from "../stylings/Experience.module.css";
function ExperiencePage({ isDark }) {
  return (
    <div
      className={isDark ? style.MainConatinerDark : style.MainConatinerLight}
    >
      <p className={style.pageHeading}>Experience</p>
    </div>
  );
}

export default ExperiencePage;
